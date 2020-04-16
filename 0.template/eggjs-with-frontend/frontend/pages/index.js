import './index.less';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Page() {

  const [ msg, setMsg ] = useState('');

  useEffect(() => {
    axios('/api/test').then(res => {
      setMsg(res.data.msg);
    });
  }, []);

  return (
    <>
      <h1>Hello, world!</h1>
      <div>api: {msg}</div>
    </>
  );
}

ReactDOM.render(<Page />, document.getElementById('app'));
