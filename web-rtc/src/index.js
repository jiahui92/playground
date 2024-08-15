import './index.less';
// import React from 'react';
import ReactDOM from 'react-dom';
import { startConnection, sendFile } from './web-rtc';

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
      <input type="file" id="fileInput" />
      <button onClick={startConnection}>Start Connection</button>
      <button onClick={sendFile}>Send File</button>
      <pre id="log"></pre>
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById('app'));


