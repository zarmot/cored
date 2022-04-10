import CoreExample from "./core"
import ChannelExample from "./channel"
import BitmapExample from "./bitmap"

const root = document.getElementById("root")!
root.innerHTML = `<div style='display: "flex"; flex-direction: "column"'></div>`
const flex = root.firstChild!
function append(example: Node) {
  const div = document.createElement("div")
  div.appendChild(example)
  flex.appendChild(div)
}
append(CoreExample().html.node)
append(ChannelExample().html.node)
append(BitmapExample().html.node)