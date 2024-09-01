import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { startConnection, sendFile, startVideo } from './web-rtc.ts';

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
        <video id='videoA' width="320" height="240" autoplay />
        <video id='videoB' width="320" height="240" autoplay />
        <button onClick={startVideo}>start video</button>
      </div>
      <pre id="log"></pre>
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById('app'));


