import { 
  Action, Core, Cored, skip,
  Channel, channel, dispatch,
  subscribe, unsubscribe
} from "@crepub/cored"

export { 
  Action, Core, Cored, skip,
  Channel, channel, dispatch,
  subscribe, unsubscribe
}

export type Html = {
  node: Node
}
export type Htmld = {
  html: Html
}
export type Component<T extends Htmld> = () => T 