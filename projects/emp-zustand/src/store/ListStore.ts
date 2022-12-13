import create from 'zustand'

/**
 * swc bug
   console.log(`[...new Array(100).keys()]`,[...new Array(100).keys()])
*/
interface ListInterface {
  list: number[]
  getList: () => void
  changeListNum: (num: string) => void
  listNum: number
}
const useListStore = create<ListInterface>()((set, get) => ({
  list: [],
  listNum: 100,
  changeListNum(num: string) {
    set({listNum: parseInt(num)})
  },
  getList() {
    let l: number[] = [...new Array(get().listNum).keys()]
		// let l: number[] = [...new Array(get().listNum).fill('')]
    l = l.map(() => {
      return Math.random()
    })
    set(state => ({
      list: l.concat(state.list),
    }))
  },
}))

export default useListStore
