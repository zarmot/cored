import { Html } from "./html"
import { Core } from "./core"

export default function Main() {
  const html = Html()
  const { data, hooks, actions } = Core()

  hooks.update = () => {
    html.valueLabel.data = data.value.toString()
  }

  hooks.update()
  html.incButton.onclick = actions.inc
  html.decButton.onclick = actions.dec

  return {
    html
  }
}