import { 
  Action, Core, 
  Channel, channel, dispatch,
  subscribe as rsubscribe, unsubscribe
} from "@crepub/cored"
import { useState, useEffect } from "react"

export { 
  Action, Core, 
  Channel, channel, dispatch
}

const va: never[] = []
function up(flag: number) { 
  return flag + 1 
}
function init<T>(Core: Core<T>, setFlag: any) {
  const update = () => setFlag(up)
  return Core(update)
}
export function useCore<T>(Core: Core<T>) {
  const [flag, setFlag] = useState<number>(0)
  const [core] = useState<T>(() => init(Core, setFlag))
  return core
}

function subscribe(channel: Channel, setFlag: any) {
  const update = () => { setFlag(up) }
  return rsubscribe(channel, update)
}
export function useChannel(channel: Channel) {
  const [flag, setFlag] = useState<number>(0)
  useEffect(() => {
    const index = subscribe(channel, setFlag)
    return () => unsubscribe(channel, index)
  }, va)
}