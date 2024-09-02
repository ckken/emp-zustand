import {proxy, useSnapshot} from 'valtio'
import {devtools} from 'valtio/utils'
function bind<T extends object>(instance: T): T {
  const obj = instance as any
  const names = Object.getOwnPropertyNames(Object.getPrototypeOf(obj))

  for (const name of names) {
    const method = obj[name]
    if (name === 'constructor' || typeof method !== 'function') continue
    obj[name] = (...args: unknown[]) => method.apply(instance, args)
  }

  return instance
}
// 优化后的用法
export class ValtioProxy {
  constructor() {
    const state = bind(proxy(this))
    devtools(state, {name: this.constructor.name, enabled: true})
    // biome-ignore lint/correctness/noConstructorReturn: <explanation>
    return state
  }
  get store() {
    return useSnapshot(this) as typeof this
  }
}
