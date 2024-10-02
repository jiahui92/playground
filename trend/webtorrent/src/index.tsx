import './index.less';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Webtorrent from 'webtorrent';

function start () {
  const client = new window.WebTorrent()
  const magnetURI = 'https://webtorrent.io/torrents/sintel.torrent'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  client.add(magnetURI, (torrent: any) => {
    // Got torrent metadata!
    console.log('Client is downloading:', torrent.infoHash)
    console.log('Client is downloading:', torrent.infoHash ?? 1)
    
    for (const file of torrent.files) {
      document.body.append(file.name)
    }
  })
}


function Page () {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById('app'));
