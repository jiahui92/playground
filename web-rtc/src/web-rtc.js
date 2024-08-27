import * as qrcode from 'qrcode';
import * as jwt from 'jsonwebtoken';
import { getData, setData } from './firebase.ts';

let localConnection;
let remoteConnection;
let sendChannel;
let receiveChannel;

function logMessage(message) {
  let log = document.getElementById('log');
  log.textContent += message + '\n';
  // console.log(`webRTC:${message}`)
}
startConnection()

export async function startConnection() {
  // 可获取到本地和公网的ip
  localConnection = new RTCPeerConnection({
    iceServers: [{
      urls: ['stun:stun.l.google.com:19302'],
      username: '',
      credential: ''
    }]
  });

  localConnection.icegatheringstatechange = (e) => logMessage('icegatheringstate: ', e.target.iceGatheringState)

  // remoteConnection = new RTCPeerConnection({});

  // 创建发送数据通道
  sendChannel = localConnection.createDataChannel('sendDataChannel');
  sendChannel.onopen = () => {
    logMessage('Data channel is open')
    sendChannel.send('hello')
  };
  sendChannel.onclose = () => logMessage('Data channel is closed');

  // 处理接收端的数据通道
  localConnection.ondatachannel = (event) => {
    receiveChannel = event.channel;
    receiveChannel.onmessage = receiveMessage;
    receiveChannel.onopen = () => logMessage('Receive channel is open');
    receiveChannel.onclose = () => logMessage('Receive channel is closed');
  };

  // 交换ICE候选
  localConnection.onicecandidate = async (event) => {
    const urlParams = new URLSearchParams(location.search)
    const isPeerA = !urlParams.get('shareId');
    const key = `candidate/${jwt.sign()}`;
    if (event.candidate) {
      if (isPeerA) {
        const candidateStr = JSON.stringify(event.candidate);
        await setData(key, candidateStr);
        const url = `${location.host}?shareId=${key}`;
        logMessage(`stun已完成: ${url}`);
        // qrcode.toCanvas(document.getElementById('qrcode'), url, (error) => {
        //     if (error) console.error(error)
        // });
      } else {
        const shareId = urlParams.get('shareId');
        const candidate = await getData(`candidate/${shareId}`)
        // 与远端进行连接
        try {
          localConnection.addIceCandidate(JSON.parse(candidate));
          logMessage('Connection established.');
        } catch (e) {
          logMessage(`Connection error: ${e.message}`)
        }
      }
    }
  };

  // 创建和交换SDP
  const offer = await localConnection.createOffer();
  await localConnection.setLocalDescription(offer);
  await localConnection.setRemoteDescription(offer);

  const answer = await localConnection.createAnswer();
  // await remoteConnection.setLocalDescription(answer);
  await localConnection.setLocalDescription(answer);

  // logMessage('Connection established.');
}

export function sendFile() {
  let fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  if (file) {
    const chunkSize = 16384; // 每次发送16KB
    const fileReader = new FileReader();
    let offset = 0;

    fileReader.onload = (event) => {
      sendChannel.send(event.target.result);
      offset += event.target.result.byteLength;

      if (offset < file.size) {
        readSlice(offset);
      } else {
        logMessage('File sent successfully.');
        sendChannel.send('EOF'); // 发送结束标识
      }
    };

    const readSlice = (o) => {
      const slice = file.slice(offset, o + chunkSize);
      fileReader.readAsArrayBuffer(slice);
    };

    readSlice(0);
  }
}

function receiveMessage(event) {
  if (event.data === 'EOF') {
    logMessage('File received successfully.');
    return;
  }

  const arrayBuffer = event.data;
  logMessage('Received ' + arrayBuffer.byteLength + ' bytes');
  // 在这里可以处理接收到的文件数据
}
