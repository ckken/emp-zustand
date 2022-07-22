import create from 'zustand'
import {combine, devtools} from 'zustand/middleware'
interface ListInterface {
  list: number[]
  getList: () => void
  changeListNum: (num: string) => void
  listNum: number
}
const useListStore = create<ListInterface>()(
  devtools((set, get) => ({
    list: [],
    listNum: 100,
    changeListNum(num: string) {
      set({listNum: parseInt(num)})
    },
    getList() {
      let l: number[] = [...new Array(get().listNum).keys()]
      l = l.map(() => {
        return Math.random()
      })
      set(state => ({
        list: l.concat(state.list),
      }))
    },
  })),
)

export default useListStore
