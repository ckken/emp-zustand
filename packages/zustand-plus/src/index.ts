import {combine, devtools, subscribeWithSelector} from 'zustand/middleware'
import {create} from 'zustand'
import createSelectors from './createSlectors'
export class ZustandPlus {
  devTool = false
  create(state: any, action: any) {
    const store = create(combine(state, action))
    return createSelectors(store)
  }
  createImmer(state: any, action: any) {
    const store = create(combine(state, action))
    return createSelectors(store)
  }
}
export default new ZustandPlus()
