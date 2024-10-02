import { logMessage } from './utils';
import { getRTCUtils } from './web-rtc';

let readSliceTimer;

export function sendFile() {
  const { sendChannel, localConnection } = getRTCUtils();
  let fileInput = document.getElementById('fileInput') as HTMLInputElement;
  const file = fileInput?.files?.[0];
  if (file) {
    const dataStr = JSON.stringify({
      name: file.name,
      size: file.size,
      type: file.type,
    })
    sendChannel.send(dataStr)
    const clearReaderTimout = () => {
      clearTimeout(readSliceTimer)
    }

    sendChannel.addEventListener('error', () => {
      clearReaderTimout()
      sendChannel.removeEventListener('error', clearReaderTimout)
    })

    // TODO showSaveFilePicker 实时写到硬盘
    const fileReader = new FileReader();
    // 
    // 分段上传：RTCDataChannel旧版本chorme只支持64KB，旧版本firefox --> 16kb
    // https://stackoverflow.com/questions/56327783/webrtc-datachannel-for-high-bandwidth-application
    // https://blog.mozilla.org/webrtc/large-data-channel-messages/
    const chunkSize = localConnection?.sctp?.maxMessageSize || 16 * 1024;
    let offset = 0;
    fileReader.onload = (event) => {
      sendChannel.send(event?.target?.result);
      offset += event.target.result.byteLength;

      if (offset < file.size) {
        readSlice();
      } else {
        logMessage('File sent successfully.');
        sendChannel.send('EOF'); // 发送结束标识
      }
    };

    const readSlice = () => {
      if (sendChannel.bufferedAmount < chunkSize) {
        const slice = file.slice(offset, offset + chunkSize);
        fileReader.readAsArrayBuffer(slice);
      } else {
        console.log('DataChannel buffer is full, waiting to send more data');
        readSliceTimer = setTimeout(() => readSlice(), 0);
      }
    };

    readSlice();
  }
}

function downloadFile(fileData: File, contentBuffer: ArrayBuffer[]) {
  // 创建一个 Blob 对象，用于保存接收到的二进制数据
  const blob = new Blob(contentBuffer, { type: 'application/octet-stream' });

  // 创建一个临时的下载链接
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileData.name; // 指定下载的文件名
  document.body.appendChild(a);
  a.style.display = 'none';
  a.click();

  // 释放 URL 对象
  URL.revokeObjectURL(url);
}

let downloadingFile: File | null = null
let contentBuffer: ArrayBuffer[] = []
let contentSize = 0
export function receiveFile(event) {
  if (event.data instanceof ArrayBuffer) {
    const arrayBuffer = event.data;
    contentSize += arrayBuffer.byteLength;
    const percent = Math.ceil(contentSize / downloadingFile?.size * 100)
    console.log(`Received ${contentSize/1024/1024} Mb, ${percent}%`);
    contentBuffer.push(arrayBuffer)
  }

  if (typeof event.data === 'string') {
    if (event.data === 'EOF') {
      logMessage('File received successfully.');
      // 在这里可以处理接收到的文件数据
      downloadFile(downloadingFile, contentBuffer);
      downloadingFile = null;
      contentBuffer = []
      contentSize = 0
      return;
    }

    const file: File = JSON.parse(event.data)
    logMessage(`File receiving: ${file.name}`);
    return downloadingFile = file;
  }
}

