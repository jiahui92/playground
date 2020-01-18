import './index.less';
import '@babel/polyfill';
import * as faceapi from 'face-api.js';

// console.log(faceapi.nets);
const myVideo = document.getElementById('myVideo');
// const myCanvas = document.getElementById('myCanvas');

navigator.mediaDevices.getUserMedia({video:true}).then((stream) => {
  myVideo.srcObject = stream;
  myVideo.play();
}).then(async () => {
  await Promise.all([
    await faceapi.nets.faceLandmark68Net.loadFromUri('https://justadudewhohacks.github.io/face-api.js/models/'),
    await faceapi.nets.tinyFaceDetector.loadFromUri('https://justadudewhohacks.github.io/face-api.js/models/'),
  ])
}).then(onPlay)

async function onPlay () {
  if(!myVideo.currentTime || myVideo.paused || myVideo.ended || !true)
        return setTimeout(() => onPlay(myVideo))
  
  const options = new faceapi.TinyFaceDetectorOptions({
    // inputSize: 416,
    scoreThreshold: 0.5
  });

  const results = await faceapi.detectAllFaces(myVideo, options).withFaceLandmarks();

  // const displaySize = { width: myVideo.width, height: myVideo.height }
  // resize the overlay canvas to the input dimensions
  const myCanvas = document.getElementById('overlay');
  const displaySize = faceapi.matchDimensions(myCanvas, myVideo, true);
  const resizeResults = faceapi.resizeResults(results, displaySize);
  // draw detections into the canvas
  faceapi.draw.drawDetections(myCanvas, resizeResults)
  faceapi.draw.drawFaceLandmarks(myCanvas, resizeResults)

  setTimeout(() => onPlay())
}