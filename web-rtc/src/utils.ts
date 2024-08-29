export function logMessage(message) {
  let log = document.getElementById('log');
  log.textContent += message + '\n';
  // console.log(`webRTC:${message}`)
}