import { 
  Action, Core, Cored, skip,
  Channel, channel, dispatch,
  subscribe, unsubscribe,
  Corex, flags
} from "@crepub/cored"

export { 
  Action, Core, Cored, skip,
  Channel, channel, dispatch,
  subscribe, unsubscribe,
  Corex, flags
}

export type Html = {
  node: Node
}
export type Htmld = {
  html: Html
}
export type Component<T extends Htmld> = () => T 

function masked<T extends Corex>(data: T["data"], mask: number) {
  return data.bitmap & mask
}
export function observe<T extends Corex>(core: T, mask: number, update: Action) {
  const mem = new Int32Array(1)
  mem[0] = core.data.bitmap & mask
  subscribe(core.subs, () => {
    const v = masked(core.data, mask)
    if (mem[0] !== v) {
      mem[0] = v
      update()
    }
  })
}