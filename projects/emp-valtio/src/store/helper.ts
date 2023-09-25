import {devtools} from 'valtio/utils'
import {proxy} from 'valtio'
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
    console.log('this ValtioProxy', this, this.constructor.name)
    // const state = bind(proxy(this))
    const state = bind(proxy(this))
    // console.log('this.constructor.name', this.constructor.name)
    devtools(state, {name: this.constructor.name, enabled: true})
    return state
  }
}
