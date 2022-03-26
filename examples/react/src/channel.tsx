import { Action, channel, dispatch, useCore, useChannel } from "cored-react"
import React, { useContext } from "react"

function Core(update: Action) {
  const data = {
    value0: 0,
    value1: 0,
    value2: 0
  }
  const ch1 = channel()
  const ch2 = channel()
  return {
    data,
    ch1,
    ch2,
    all() {
      data.value0 += 1
      data.value1 += 1
      data.value2 += 1
      dispatch(ch1)
      dispatch(ch2)
      update()
    },
    sub1() {
      data.value0 += 1
      data.value1 += 1
      dispatch(ch1)
      update()
    },
    sub2() {
      data.value0 += 1
      data.value2 += 1
      dispatch(ch2)
      update()
    }
  }
}
type Core = ReturnType<typeof Core>

const context = React.createContext<Core>(undefined as any)
const Main = () => {
  const core = useCore(Core)
  console.log("Render Channel Main")
  return (
    <context.Provider value={core}>
      <div>
        {core.data.value0}
        <button onClick={core.all}>All</button>
        {core.data.value1}
        <M1/>
        {core.data.value2}
        <M2/>
      </div>
    </context.Provider>
  )
}
export default Main

const Sub1 = () => {
  const core = useContext(context)
  useChannel(core.ch1)
  console.log("Render Channel Sub1")
  return (
    <button onClick={core.sub1}>Sub1</button>
  )
}
const M1 = React.memo(Sub1)
const Sub2 = () => {
  const core = useContext(context)
  useChannel(core.ch2)
  console.log("Render Channel Sub2")
  return (
    <button onClick={core.sub2}>Sub2</button>
  )
}
const M2 = React.memo(Sub2)