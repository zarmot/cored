import { Action } from "cored-dom"

export function Core(update: Action) {
  const data = {
    value: 0
  }
  const actions = {
    inc() {
      data.value += 1
      update()
    },
    dec() {
      data.value -= 1
      update()
    }
  }
  return {
    data,
    actions
  }
}
export type Core = ReturnType<typeof Core>