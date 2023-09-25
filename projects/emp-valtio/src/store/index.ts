import {ValtioProxy} from './helper'
import {proxy} from 'valtio'

//
const waitAsync = (time = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}

class CountState extends ValtioProxy {
  public dur = 4
  public config = {
    count: 1,
    info: 'count',
  }

  inc() {
    // console.log(this.dur)
    ++this.dur
  }
  dec() {
    --this.dur
  }
  async setCountAsync() {
    await waitAsync(500)
    this.config.count++
  }
  changeConfigInfo() {
    this.config.info = `${Math.round(Math.random() * 100000)}`
  }
}
export const state = new CountState()
// 默认用法
// export const state = proxy(new CountState())
// devtools(state, {name: CountState.name, enabled: true})
//
// export const state = proxy({
//   dur: 4,
//   config: {
//     count: 1,
//     info: 'count',
//   },
//   incDur() {
//     // console.log(this.dur)
//     ++state.dur
//   },
//   decDur() {
//     --state.dur
//   },
//   async setCountAsync() {
//     await waitAsync(500)
//     state.config.count++
//   },
//   changeConfigInfo() {
//     state.config.info = `${Math.round(Math.random() * 100000)}`
//   },
// })

class User {
  first: any = null
  last: any = null
  constructor(first: string, last: string) {
    this.first = first
    this.last = last
  }
  greet() {
    return `Hi ${this.first}!`
  }
  get fullName() {
    return `${this.first} ${this.last}`
  }
  changeName() {
    this.last = `${Math.round(Math.random() * 100000)}`
  }
}
export const useState = proxy(new User('Timo', 'Kivinen'))
