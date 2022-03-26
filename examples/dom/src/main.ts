import { CoreExample } from "./core";
import { ChannelExample } from "./channel";

const root = document.getElementById("root")!
root.innerHTML = `<div style='display: "flex"; flex-direction: "column"'></div>`
const flex = root.firstChild!
function append(example: HTMLElement) {
  const div = document.createElement("div")
  div.appendChild(example)
  flex.appendChild(div)
}
append(new CoreExample())
append(new ChannelExample())