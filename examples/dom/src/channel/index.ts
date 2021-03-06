import { Html } from "./html"
import { Core } from "./core"

import { subscribe } from "cored-dom"

export default function Main() {
  const html = Html()
  const { data, hooks, actions, ch1, ch2 } = Core()

  const update1 = () => {
    html.value1Label.data = data.value1.toString()
  }
  const update2 = () => {
    html.value2Label.data = data.value2.toString()
  }
  hooks.update = () => {
    html.value0Label.data = data.value0.toString()
    update1()
    update2()
  }

  hooks.update()
  html.allButton.onclick = actions.all
  html.sub1Button.onclick = actions.sub1
  html.sub2Button.onclick = actions.sub2

  subscribe(ch1, update1)
  subscribe(ch2, update2)

  return {
    html
  }
}