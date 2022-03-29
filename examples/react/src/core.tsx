import { skip, useCored } from "cored-react"

function Core() {
  const data = {
    value: 0
  }
  const hooks = {
    update: skip
  }
  const actions = {
    inc() {
      data.value += 1
      hooks.update()
    },
    dec() {
      data.value -= 1
      hooks.update()
    }
  }
  return {
    data,
    hooks,
    actions,
  }
}
type Core = ReturnType<typeof Core>

const Main = () => {
  const { data, actions } = useCored(Core)
  console.log("Render Core Main")
  return (
    <div> 
      {data.value}
      <button onClick={actions.inc}>inc</button>
      <button onClick={actions.dec}>dec</button>
    </div>
  )
}
export default Main