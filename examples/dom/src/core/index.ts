import { Html } from "./html"
import { Core } from "./core"

export class CoreExample extends HTMLElement {
  update
  actions
  constructor() {
    super()
    const html = Html()
    const { data, actions } = Core(() => { this.update() })
    this.actions = actions
    this.append(html.node)

    this.update = () => {
      html.valueLabel.data = data.value.toString()
    }

    this.update()
    html.incButton.onclick = actions.inc
    html.decButton.onclick = actions.dec
  }
}
window.customElements.define("core-example", CoreExample)