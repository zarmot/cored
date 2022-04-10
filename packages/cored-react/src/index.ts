import { 
  Action, Core, Cored, skip,
  Channel, channel, dispatch,
  subscribe, unsubscribe,
  Corex, flags
} from "@crepub/cored"
import { useState, useEffect } from "react"

export { 
  Action, Core, Cored, skip,
  Channel, channel, dispatch,
  Corex, flags
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

function sub(channel: Channel, setFlag: any) {
  const update = () => setFlag(up)
  return subscribe(channel, update)
}
export function useChannel(channel: Channel) {
  const [flag, setFlag] = useState(0)
  useEffect(() => {
    const index = sub(channel, setFlag)
    return () => unsubscribe(channel, index)
  }, va)
}

function set<T extends Corex>(data: T["data"], mask: number, setFlag: any) {
  setFlag(data.bitmap & mask)
}
export function useCorex<T extends Corex>(core: T, mask: number) {
  const [flag, setFlag] = useState(core.data.bitmap & mask)
  useEffect(() => {
    const index = subscribe(core.subs, () => set(core.data, mask, setFlag))
    return () => unsubscribe(core.subs, index)
  }, va)
}