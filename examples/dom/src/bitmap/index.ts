import { Html } from "./html"
import { Core, mask1, mask2 } from "./core"

import { observe } from "cored-dom"

export default function Main() {
  const html = Html()
  const core = Core()
  const { data, actions } = core

  const update1 = () => {
    html.value1Label.data = data.value1.toString()
  }
  const update2 = () => {
    html.value2Label.data = data.value2.toString()
  }

  update1()
  update2()
  html.sub1Button.onclick = actions.sub1
  html.sub2Button.onclick = actions.sub2

  observe(core, mask1, update1)
  observe(core, mask2, update2)

  return {
    html
  }
}