import create from 'zustand'
import axios from 'axios'

interface CodeStoreType {
  code: any
  fetchRemote: () => void
  cleanCode: () => void
}
const useCodeStore = create<CodeStoreType>()(set => ({
  code: {},
  cleanCode() {
    set({code: ''})
  },
  async fetchRemote() {
    const {data} = await axios.get('data.json')
    set({code: data})
  },
}))

export default useCodeStore
