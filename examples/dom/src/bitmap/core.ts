import { flags, channel, dispatch } from "cored-dom"

export const mask1 = flags.f1
export const mask2 = flags.f2

export function Core() {
  const subs = channel()
  const data = {
    bitmap: 0,
    value1: 0,
    value2: 0
  }
  const actions = {
    sub1() {
      data.value1 += 1
      data.bitmap ^= mask1
      dispatch(subs)
    },
    sub2() {
      data.value2 += 1
      data.bitmap ^= mask2
      dispatch(subs)
    }
  }
  return {
    subs,
    data,
    actions
  }
}
export type Core = ReturnType<typeof Core>