import * as qrcode from 'qrcode';
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

  localConnection.icegatheringstatechange = (e) => logMessage(`icegatheringstate: ${e.target.iceGatheringState}`)

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

  const urlParams = new URLSearchParams(location.search)
  const isPeerA = !urlParams.get('shareId');

  // 创建和交换SDP
  if (isPeerA) {
    offer = await localConnection.createOffer();
    await localConnection.setLocalDescription(offer);
    // TODO 怎么拿到远端的answer
    // await localConnection.setRemoteDescription(offer);
  } else {
    const shareId = urlParams.get('shareId');
    // 与远端进行连接
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
      const url = `${location.host}?shareId=${key}`;
      logMessage(`stun已完成: ${url}`);
    } else {
      logMessage(`stun已完成`)
    }
    
    // qrcode.toCanvas(document.getElementById('qrcode'), url, (error) => {
    //     if (error) console.error(error)
    // });
  };
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
