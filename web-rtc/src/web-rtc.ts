import QRCode from 'easyqrcodejs';
import { v4 as uuidv4 } from 'uuid';
import { getData, setData, onDataChange } from './firebase.ts';
import VConsole from 'vconsole';
import { logMessage } from './utils.ts';
import { initMedia } from './meida.ts';
import { receiveFile } from './file.ts';

const vConsole = new VConsole();

interface IceData {
  peerACandidate?: string[];
  peerBCandidate?: string[];
  offer?: string;
  answer?: string;
}

let localConnection: RTCPeerConnection;
let sendChannel: RTCDataChannel;
let receiveChannel: RTCDataChannel;
let offer;
let answer;

const urlParams = new URLSearchParams(location.search)
const shareId = urlParams.get('shareId');
const isPeerA = !shareId;

startConnection()

export async function startConnection() {
  // 可获取到本地和公网的ip
  // TODO 网络很不稳定，有时连接很快，有时很慢；超时重试
  localConnection = new RTCPeerConnection({
    iceServers: [{
      // https://github.com/pradt2/always-online-stun?tab=readme-ov-file
      urls: ['stun:stun.freeswitch.org:3478'],
      username: '',
      credential: ''
    }]
  });

  localConnection.onicegatheringstatechange = (e) => logMessage(`icegatheringstate: ${e.target?.iceGatheringState}`)
  
  await initMedia(localConnection)

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
    logMessage(`ICE connection state change: ${evt.target.iceConnectionState}`);
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

export function handleDataChannel() {
  // 创建发送数据通道
  sendChannel = localConnection.createDataChannel('sendDataChannel');

  sendChannel.addEventListener('open', () => {
    logMessage('Data channel is open');
  })

  sendChannel.addEventListener('close', () => {
    logMessage('Data channel is closed');
  })

  sendChannel.addEventListener('error', (event) => {
    logMessage(`Data channel error: ${event?.error?.message}`)
  })

  // 处理接收端的数据通道
  localConnection.ondatachannel = (event) => {
    receiveChannel = event.channel;
    receiveChannel.onmessage = receiveFile;
    receiveChannel.onopen = () => logMessage('Receive channel is open');
    receiveChannel.onclose = () => logMessage('Receive channel is closed');
    receiveChannel.onerror = (event) => {
      logMessage(`Receive channel error: ${event.error.message}`)
    }
  };
}

export function getRTCUtils() {
  return { localConnection, sendChannel }
}
