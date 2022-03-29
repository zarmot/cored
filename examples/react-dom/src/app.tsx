import { useRef, useState, useLayoutEffect } from "react"

import CoredExample from "./core"

const App = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [cored] = useState(CoredExample)

  useLayoutEffect(() => {
    ref.current?.appendChild(cored.html.node)
  }, [ref.current])

  return <div ref={ref}/>
}
export default App