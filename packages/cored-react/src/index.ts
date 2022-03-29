import { 
  Action, Core, Cored, skip,
  Channel, channel, dispatch,
  subscribe as basesubscribe, unsubscribe
} from "@crepub/cored"
import { useState, useEffect } from "react"

export { 
  Action, Core, Cored, skip,
  Channel, channel, dispatch
}

export function useCore<T>(Core: Core<T>) {
  const [core] = useState<T>(Core)
  return core
}

const va: never[] = []
function up(flag: number) {
  return flag + 1
}
function init<T extends Cored>(core: T, setFlag: any) {
  const update = () => setFlag(up)
  core.hooks.update = update
}
export function useCored<T extends Cored>(Core: Core<T>) {
  const [core] = useState<T>(Core)
  const [flag, setFlag] = useState(0)
  useEffect(() => {
    init(core, setFlag)
  }, va)
  return core
}

function subscribe(channel: Channel, setFlag: any) {
  const update = () => setFlag(up)
  return basesubscribe(channel, update)
}
export function useChannel(channel: Channel) {
  const [flag, setFlag] = useState(0)
  useEffect(() => {
    const index = subscribe(channel, setFlag)
    return () => unsubscribe(channel, index)
  }, va)
}