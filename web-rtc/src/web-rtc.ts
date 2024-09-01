import QRCode from 'easyqrcodejs';
import { v4 as uuidv4 } from 'uuid';
import { getData, setData, onDataChange } from './firebase.ts';
import VConsole from 'vconsole';
import { logMessage } from './utils.ts';

const vConsole = new VConsole();

interface IceData {
  peerACandidate?: string[];
  peerBCandidate?: string[];
  offer?: string;
  answer?: string;
}

let localConnection;
let sendChannel;
let receiveChannel;
let offer;
let answer;
let readSliceTimer;

const urlParams = new URLSearchParams(location.search)
const shareId = urlParams.get('shareId');
const isPeerA = !shareId;

if (isPeerA) {
  startConnection()
}

export async function startConnection() {
  // 可获取到本地和公网的ip
  localConnection = new RTCPeerConnection({
    iceServers: [{
      // https://github.com/pradt2/always-online-stun?tab=readme-ov-file
      urls: ['stun:stun.freeswitch.org:3478'],
      username: '',
      credential: ''
    }]
  });

  localConnection.icegatheringstatechange = (e) => logMessage(`icegatheringstate: ${e.target.iceGatheringState}`)

  handleDataChannel()

  // 创建和交换SDP
  if (isPeerA) {
    offer = await localConnection.createOffer();
    await localConnection.setLocalDescription(offer);
  } else {
    try {
      const dataStr = await getData(`ice/${shareId}`)
      const data: IceData = JSON.parse(dataStr)

      await localConnection.setRemoteDescription(data.offer);
      answer = await localConnection.createAnswer();
      await localConnection.setLocalDescription(answer);

      data.peerACandidate?.forEach((candidate) => {
        localConnection.addIceCandidate(candidate);
      })
    } catch (e) {
      logMessage(`Connection error: ${e.message}`)
    }
  }

  localConnection.oniceconnectionstatechange = (evt) => {
    logMessage('ICE connection state change: ' + evt.target.iceConnectionState);
  }

  // 交换ICE候选
  const candidateArr = [];
  localConnection.onicecandidate = async (event) => {
    let key;
    if (isPeerA) {
      key = localStorage.getItem('shareId') || uuidv4()
      localStorage.setItem('shareId', key)
    } else {
      key = shareId
    }
    
    if (event.candidate) {
      candidateArr.push(event.candidate)
      return
    }

    const data: IceData = {}
    if (isPeerA) {
      data.peerACandidate = candidateArr
      data.offer = offer
    } else {
      data.peerBCandidate = candidateArr
      data.answer = answer
    }

    await setData(`ice/${key}`, JSON.stringify(data));

    if (isPeerA) {
      // 监听peerB的值
      onDataChange(`ice/${key}`, async (dataStr) => {
        const data: IceData = JSON.parse(dataStr)
        if (!data.answer) return;

        await localConnection.setRemoteDescription(data.answer);
        
        data.peerBCandidate?.forEach((candidate) => {
          localConnection.addIceCandidate(candidate);
        })
      })
    }

    if (isPeerA) {
      const url = `${location.origin}${location.pathname}?shareId=${key}`;
      logMessage(`stun已完成: ${url}`);
      const qrcodeDom = document.getElementById('qrcode')
      new QRCode(qrcodeDom, {
        text: url,
      });
    } else {
      logMessage(`stun已完成`)
    }
  };
}

export function sendFile() {
  let fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  if (file) {
    const dataStr = JSON.stringify({
      name: file.name,
      size: file.size,
      type: file.type,
    })
    sendChannel.send(dataStr)

    // TODO showSaveFilePicker 实时写到硬盘
    const fileReader = new FileReader();
    // 
    // 分段上传：RTCDataChannel旧版本chorme只支持64KB，旧版本firefox --> 16kb
    // https://stackoverflow.com/questions/56327783/webrtc-datachannel-for-high-bandwidth-application
    // https://blog.mozilla.org/webrtc/large-data-channel-messages/
    const chunkSize = localConnection?.sctp?.maxMessageSize || 16 * 1024;
    let offset = 0;
    fileReader.onload = (event) => {
      sendChannel.send(event.target.result);
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

export function handleDataChannel() {
  // 创建发送数据通道
  sendChannel = localConnection.createDataChannel('sendDataChannel');
  sendChannel.onopen = () => {
    logMessage('Data channel is open')
  };
  sendChannel.onclose = () => {
    logMessage('Data channel is closed');
    clearTimeout(readSliceTimer)
  }

  sendChannel.onerror = (event) => {
    logMessage(`Data channel error: ${event.error.message}`)
    clearTimeout(readSliceTimer)
  }

  // 处理接收端的数据通道
  localConnection.ondatachannel = (event) => {
    receiveChannel = event.channel;
    receiveChannel.onmessage = receiveMessage;
    receiveChannel.onopen = () => logMessage('Receive channel is open');
    receiveChannel.onclose = () => logMessage('Receive channel is closed');
    receiveChannel.onerror = (event) => {
      logMessage(`Receive channel error: ${event.error.message}`)
    }
  };
}

let downloadingFile: File | null = null
let contentBuffer: ArrayBuffer[] = []
let contentSize = 0
function receiveMessage(event) {
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

export async function startVideo() {
  if (!navigator.mediaDevices?.getUserMedia) {
    logMessage('not support getUserMedia')
    return
  }

  try {
    const videoStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true })
    const videoA = document.querySelector('#videoA');
    videoA.srcObject = videoStream;
    localConnection.onaddStream = (event) => {
      const videoB = document.querySelector('#videoB');
      videoB.srcObject = event.stram;
    }
  } catch (error) {
    logMessage(error.message)
  }
}
