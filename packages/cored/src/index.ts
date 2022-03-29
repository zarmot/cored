export type Action = () => void
export type Core<T> = () => T
export type Cored = {
  hooks: {
    update: Action
  }
}
export const skip = () => {}

export type Channel = {
  subs: Array<Function | undefined>
  unsubs: Array<number>
}
export function channel(): Channel {
  return {
    subs: [],
    unsubs: []
  }
}
export function dispatch(channel: Channel) {
  channel.subs.forEach((update) => update?.())
}
export function subscribe(channel: Channel, update: Action) {
  let index = channel.unsubs.pop()
  if (index === undefined) {
    index = channel.subs.length
    channel.subs.push(update)
  } else {
    channel.subs[index] = update
  }
  return index
}
export function unsubscribe(channel: Channel, index: number) {
  channel.subs[index] = undefined
  channel.unsubs.push(index)
}

export type Flags = Int32Array