export function logMessage(message) {
  const log = document.getElementById('log') as HTMLElement;
  log.textContent += message + '\n';
}