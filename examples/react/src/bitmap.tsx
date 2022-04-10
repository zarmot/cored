import { flags, channel, dispatch, useCore, useCorex } from "cored-react"
import React, { useContext } from "react"

const mask1 = flags.f1
const mask2 = flags.f2

function Core() {
  const subs = channel()
  const data = {
    bitmap: 0,
    value1: 0,
    value2: 0
  }
  const actions = {
    sub1() {
      data.value1 += 1
      data.bitmap ^= mask1
      dispatch(subs)
    },
    sub2() {
      data.value2 += 1
      data.bitmap ^= mask2
      dispatch(subs)
    }
  }
  return {
    subs,
    data,
    actions
  }
}
type Core = ReturnType<typeof Core>

const context = React.createContext<Core>(undefined as any)
const Main = () => {
  const core = useCore(Core)
  console.log("Render Bitmap Main")
  return (
    <context.Provider value={core}>
      <div>
        <M1/>
        <M2/>
      </div>
    </context.Provider>
  )
}
export default Main

const Sub1 = () => {
  const core = useContext(context)
  const { data, actions } = core
  useCorex(core, mask1)
  console.log("Render Bitmap Sub1")
  return (
    <>
      {data.value1}
      <button onClick={actions.sub1}>Sub1</button>
    </>
  )
}
const M1 = React.memo(Sub1)
const Sub2 = () => {
  const core = useContext(context)
  const { data, actions } = core
  useCorex(core, mask2)
  console.log("Render Bitmap Sub2")
  return (
    <>
      {data.value2}
      <button onClick={actions.sub2}>Sub2</button>
    </>
  )
}
const M2 = React.memo(Sub2)