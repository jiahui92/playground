import { logMessage } from './utils.ts';

export async function initMedia(localConnection: RTCPeerConnection) {
  if (!navigator.mediaDevices?.getUserMedia) {
    logMessage('not support getUserMedia')
    return
  }

  try {
    const videoStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true })
    const videoA = document.querySelector('#videoA') as HTMLVideoElement;
    videoA.srcObject = videoStream;
    for (const track of videoStream.getTracks()) {
      localConnection.addTrack(track, videoStream);
    }
  } catch(e) {
    logMessage(e.message)
  }

  localConnection.ontrack = (event) => {
    let remoteStream;
    const videoB = document.querySelector('#videoB') as HTMLVideoElement;
    if (!remoteStream) {
      remoteStream = new MediaStream();
      videoB.srcObject = remoteStream;
    }
    if (event.streams?.[0]) {
      remoteStream.addTrack(event.track);
    }
  };
}

export async function startVideo(localConnection: RTCPeerConnection) {
  if (!navigator.mediaDevices?.getUserMedia) {
    logMessage('not support getUserMedia')
    return
  }
}

export async function shareScreen(localConnection: RTCPeerConnection) {
  if (!navigator.mediaDevices?.getUserMedia) {
    logMessage('not support getUserMedia')
    return
  }

  try {
    const videoStream = await navigator.mediaDevices.getUserMedia({ screen: true })
    const videoA = document.querySelector('#videoA');
    videoA.srcObject = videoStream;
  } catch (error) {
    logMessage(error.message)
  }

  localConnection.onaddstream = (event) => {
    const videoB = document.querySelector('#videoB');
    videoB.srcObject = event.stram;
  }
}
