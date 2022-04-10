import React from 'react'
import ReactDOM from 'react-dom'

import Core from "./core"
import Channel from "./channel"
import Bitmap from "./bitmap"

ReactDOM.render(
  <React.StrictMode>
    <div style={{display: "flex", flexDirection: "column"}}>
      <Core/>
      <Channel/>
      <Bitmap/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
