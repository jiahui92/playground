import QRCode from 'easyqrcodejs';
import { v4 as uuidv4 } from 'uuid';
import { getData, setData, onDataChange } from './firebase.ts';

interface IceData {
  peerACandidate?: string[];
  peerBCandidate?: string[];
  offer?: string;
  answer?: string;
}

let localConnection;
let remoteConnection;
let sendChannel;
let receiveChannel;
let offer;
let answer;

function logMessage(message) {
  let log = document.getElementById('log');
  log.textContent += message + '\n';
  // console.log(`webRTC:${message}`)
}

export async function startConnection() {
  // 可获取到本地和公网的ip
  localConnection = new RTCPeerConnection({
    iceServers: [{
      urls: ['stun:stun.freeswitch.org:3478'],
      username: '',
      credential: ''
    }]
  });

  localConnection.icegatheringstatechange = (e) => logMessage(`icegatheringstate: ${e.target.iceGatheringState}`)

  handleDataChannel()

  const urlParams = new URLSearchParams(location.search)
  const isPeerA = !urlParams.get('shareId');

  // 创建和交换SDP
  if (isPeerA) {
    offer = await localConnection.createOffer();
    await localConnection.setLocalDescription(offer);
  } else {
    const shareId = urlParams.get('shareId');
    try {
      const dataStr = await getData(`ice/${shareId}`)
      const data: IceData = JSON.parse(dataStr)

      await localConnection.setRemoteDescription(data.offer);
      answer = await localConnection.createAnswer();
      await localConnection.setLocalDescription(answer);

      data.peerACandidate?.forEach((candidate) => {
        localConnection.addIceCandidate(candidate);
      })
      logMessage('Connection established.');
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
    const key = 'test1' || uuidv4();
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
      const url = `${location.origin}?shareId=${key}`;
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

    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const arrayBuffer = event.target.result as ArrayBuffer;
      // 发送数据
      sendChannel.send(arrayBuffer);
      logMessage(`File sent successfully`);
      sendChannel.send('EOF'); // 发送结束标识
    };

    fileReader.readAsArrayBuffer(file)
    
    // 分段上传、断点续传？
    // const chunkSize = 16384; // 每次发送16KB
    // let offset = 0;
    // fileReader.onload = (event) => {
    //   sendChannel.send(event.target.result);
    //   offset += event.target.result.byteLength;

    //   if (offset < file.size) {
    //     readSlice(offset);
    //   } else {
    //     logMessage('File sent successfully.');
    //     sendChannel.send('EOF'); // 发送结束标识
    //   }
    // };

    // const readSlice = (o) => {
    //   const slice = file.slice(offset, o + chunkSize);
    //   fileReader.readAsArrayBuffer(slice);
    // };

    // readSlice(0);
  }
}

export function handleDataChannel() {
  // 创建发送数据通道
  sendChannel = localConnection.createDataChannel('sendDataChannel');
  sendChannel.onopen = () => {
    logMessage('Data channel is open')
  };
  sendChannel.onclose = () => logMessage('Data channel is closed');

  // 处理接收端的数据通道
  localConnection.ondatachannel = (event) => {
    receiveChannel = event.channel;
    receiveChannel.onmessage = receiveMessage;
    receiveChannel.onopen = () => logMessage('Receive channel is open');
    receiveChannel.onclose = () => logMessage('Receive channel is closed');
  };
}

let downloadingFile: File | null = null
function receiveMessage(event) {
  if (event.data instanceof ArrayBuffer) {
    const arrayBuffer = event.data;
    logMessage('Received ' + arrayBuffer.byteLength + ' bytes');
    // 在这里可以处理接收到的文件数据
    downloadFile(downloadingFile, arrayBuffer);
  }

  if (typeof event.data === 'string') {
    if (event.data === 'EOF') {
      logMessage('File received successfully.');
      return downloadingFile = null;
    }

    const file: File = JSON.parse(event.data)
    logMessage(`File receiving: ${file.name}`);
    return downloadingFile = file;
  }
}

function downloadFile(fileData: File, content: ArrayBuffer) {
  // 创建一个 Blob 对象，用于保存接收到的二进制数据
  const blob = new Blob([content]);

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
