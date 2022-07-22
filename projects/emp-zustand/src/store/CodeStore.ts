import create from 'zustand'
import axios from 'axios'
import {devtools} from 'zustand/middleware'
interface CodeStoreType {
  code: any
  fetchRemote: () => void
  cleanCode: () => void
}
const useCodeStore = create<CodeStoreType>()(
  devtools(set => ({
    code: {},
    cleanCode() {
      set({code: ''})
    },
    async fetchRemote() {
      const {data} = await axios.get('/data.json')
      set({code: data})
    },
  })),
)

export default useCodeStore
