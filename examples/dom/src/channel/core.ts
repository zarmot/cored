import { skip, channel, dispatch } from "cored-dom"

export function Core() {
  const data = {
    value0: 0,
    value1: 0,
    value2: 0
  }
  const hooks = {
    update: skip
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
      hooks.update()
    },
    sub1() {
      data.value0 += 1
      data.value1 += 1
      dispatch(ch1)
      hooks.update()
    },
    sub2() {
      data.value0 += 1
      data.value2 += 1
      dispatch(ch2)
      hooks.update()
    }
  }
  return {
    data,
    hooks,
    actions,
    ch1,
    ch2
  }
}
export type Core = ReturnType<typeof Core>