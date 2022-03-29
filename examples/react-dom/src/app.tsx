import { useState } from "react"

import CoredExample from "./core"

const App = () => {
  const [cored] = useState(CoredExample)
  return <div ref={node => node?.appendChild(cored.html.node)}/>
}
export default App