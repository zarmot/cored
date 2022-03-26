import { Action, useCore } from "cored-react"

function Core(update: Action) {
  const data = {
    value: 0
  }
  return {
    data,
    inc() {
      data.value += 1
      update()
    },
    dec() {
      data.value -= 1
      update()
    }
  }
}
type Core = ReturnType<typeof Core>

const Main = () => {
  const core = useCore(Core)
  console.log("Render Core Main")
  return (
    <div> 
      {core.data.value}
      <button onClick={core.inc}>inc</button>
      <button onClick={core.dec}>dec</button>
    </div>
  )
}
export default Main