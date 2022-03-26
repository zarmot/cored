import { Html } from "./html"
import { Core } from "./core"

import { subscribe } from "cored-dom"

export class ChannelExample extends HTMLElement {
  update
  update1
  update2
  actions
  constructor() {
    super()
    const html = Html()
    const { data, actions, ch1, ch2 } = Core(() => { this.update() })
    this.actions = actions
    this.append(html.node)

    this.update = () => {
      html.value0Label.data = data.value0.toString()
      this.update1()
      this.update2()
    }
    this.update1 = () => {
      html.value1Label.data = data.value1.toString()
    }
    this.update2 = () => {
      html.value2Label.data = data.value2.toString()
    }

    this.update()
    html.allButton.onclick = actions.all
    html.sub1Button.onclick = actions.sub1
    html.sub2Button.onclick = actions.sub2

    subscribe(ch1, this.update1)
    subscribe(ch2, this.update2)
  }
}
window.customElements.define("channel-example", ChannelExample)