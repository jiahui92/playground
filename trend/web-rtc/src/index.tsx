import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { startConnection } from './web-rtc.ts';
import { toggleVideo, shareScreen } from './meida.ts';
import { sendFile } from './file.ts';

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
        {/* <button onClick={toggleVideo}>toggle video</button> */}
        <video id='videoA' width="320" height="240" controls />
        <video id='videoB' width="320" height="240" controls />
      </div>
      {/* <div>
        <button onClick={shareScreen}>share screen</button>
        <video id='screen' width="320" height="240" autoplay />
      </div> */}
      <pre id="log"></pre>
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById('app'));


