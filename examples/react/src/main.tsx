import React from 'react'
import ReactDOM from 'react-dom'

import "./styles.css"

import Core from "./core"
import Channel from "./channel"

ReactDOM.render(
  <React.StrictMode>
    <div style={{display: "flex", flexDirection: "column"}}>
      <Core/>
      <Channel/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
