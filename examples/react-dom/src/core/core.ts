import { skip } from "cored-dom"

export function Core() {
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
    actions
  }
}
export type Core = ReturnType<typeof Core>