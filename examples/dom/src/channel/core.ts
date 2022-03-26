import { Action, channel, dispatch } from "cored-dom"

export function Core(update: Action) {
  const data = {
    value0: 0,
    value1: 0,
    value2: 0
  }
  const ch1 = channel()
  const ch2 = channel()
  const actions = {
    all() {
      data.value0 += 1
      data.value1 += 1
      data.value2 += 1
      dispatch(ch1)
      dispatch(ch2)
      update()
    },
    sub1() {
      data.value0 += 1
      data.value1 += 1
      dispatch(ch1)
      update()
    },
    sub2() {
      data.value0 += 1
      data.value2 += 1
      dispatch(ch2)
      update()
    }
  }
  return {
    data,
    ch1,
    ch2,
    actions
  }
}
export type Core = ReturnType<typeof Core>