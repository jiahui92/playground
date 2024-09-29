import './index.less';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

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
      <h1>Hello, world!</h1>
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById('app'));
