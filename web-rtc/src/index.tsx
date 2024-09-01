import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { startConnection, sendFile, } from './web-rtc.ts';
import { startVideo, shareScreen } from './meida.ts';

// class View extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//       </div>
//     );
//   }
// }

function Page () {
  return (
    <div>
      <div>
        <div id="qrcode"></div>
        <button onClick={startConnection}>Start Connection</button>
      </div>
      <div>
        <input type="file" id="fileInput" />
        <button onClick={sendFile}>Send File</button>
      </div>
      <div>
        <button onClick={startVideo}>start video</button>
        <video id='videoA' width="320" height="240" controls />
        <video id='videoB' width="320" height="240" controls />
      </div>
      <div>
        <button onClick={shareScreen}>share screen</button>
        <video id='screen' width="320" height="240" autoplay />
      </div>
      <pre id="log"></pre>
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById('app'));


