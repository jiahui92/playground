let localConnection;
let remoteConnection;
let sendChannel;
let receiveChannel;
let fileInput = document.getElementById('fileInput');
let log = document.getElementById('log');

function logMessage(message) {
    // log.textContent += message + '\n';
    console.log(`webRTC:${message}`)
}

export async function startConnection() {
    const configuration = {};

    localConnection = new RTCPeerConnection(configuration);
    remoteConnection = new RTCPeerConnection(configuration);

    // 创建发送数据通道
    sendChannel = localConnection.createDataChannel('sendDataChannel');
    sendChannel.onopen = () => logMessage('Data channel is open');
    sendChannel.onclose = () => logMessage('Data channel is closed');

    // 处理接收端的数据通道
    remoteConnection.ondatachannel = (event) => {
        receiveChannel = event.channel;
        receiveChannel.onmessage = receiveMessage;
        receiveChannel.onopen = () => logMessage('Receive channel is open');
        receiveChannel.onclose = () => logMessage('Receive channel is closed');
    };

    // 交换ICE候选
    localConnection.onicecandidate = (event) => {
        if (event.candidate) {
            remoteConnection.addIceCandidate(event.candidate);
        }
    };
    remoteConnection.onicecandidate = (event) => {
        if (event.candidate) {
            localConnection.addIceCandidate(event.candidate);
        }
    };

    // 创建和交换SDP
    const offer = await localConnection.createOffer();
    await localConnection.setLocalDescription(offer);
    await remoteConnection.setRemoteDescription(offer);

    const answer = await remoteConnection.createAnswer();
    await remoteConnection.setLocalDescription(answer);
    await localConnection.setRemoteDescription(answer);

    logMessage('Connection established.');
}

export function sendFile() {
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
