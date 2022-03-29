import { skip, channel, dispatch, useCored, useChannel } from "cored-react"
import React, { useContext } from "react"

function Core() {
  const data = {
    value0: 0,
    value1: 0,
    value2: 0
  }
  const hooks = {
    update: skip
  }
  const ch1 = channel()
  const ch2 = channel()
  const actions = {
    all() {
      data.value0 += 1
      data.value1 += 1
      data.value2 += 1
      dispatch(ch1)
      dispatch(ch2)
      hooks.update()
    },
    sub1() {
      data.value0 += 1
      data.value1 += 1
      dispatch(ch1)
      hooks.update()
    },
    sub2() {
      data.value0 += 1
      data.value2 += 1
      dispatch(ch2)
      hooks.update()
    }
  }
  return {
    data,
    hooks,
    actions,
    ch1,
    ch2
  }
}
type Core = ReturnType<typeof Core>

const context = React.createContext<Core>(undefined as any)
const Main = () => {
  const core = useCored(Core)
  const { data, actions } = core
  console.log("Render Channel Main")
  return (
    <context.Provider value={core}>
      <div>
        {data.value0}
        <button onClick={actions.all}>All</button>
        {data.value1}
        <M1/>
        {data.value2}
        <M2/>
      </div>
    </context.Provider>
  )
}
export default Main

const Sub1 = () => {
  const { actions, ch1 } = useContext(context)
  useChannel(ch1)
  console.log("Render Channel Sub1")
  return (
    <button onClick={actions.sub1}>Sub1</button>
  )
}
const M1 = React.memo(Sub1)
const Sub2 = () => {
  const { actions, ch2 } = useContext(context)
  useChannel(ch2)
  console.log("Render Channel Sub2")
  return (
    <button onClick={actions.sub2}>Sub2</button>
  )
}
const M2 = React.memo(Sub2)