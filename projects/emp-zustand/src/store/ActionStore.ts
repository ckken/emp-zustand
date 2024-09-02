import create from 'zustand'
import {immer} from 'zustand/middleware/immer'
interface BearsI {
  count: number
  tips: string
}
interface TypeI {
  bears: BearsI
}
interface ActionI {
  increasePopulation: () => void
  decreasePopulation: () => void
  removeAllBears: () => void
}
const useActionStore = create(
  immer<TypeI & ActionI>(set => ({
    bears: {
      count: 0,
      tips: 'bearStore',
    },
    increasePopulation: () =>
      set(state => {
        state.bears.count++
      }),
    decreasePopulation: () =>
      set(state => {
        state.bears.count--
      }),
    removeAllBears: () =>
      set(state => {
        state.bears.count = 0
      }),
  })),
)

export default useActionStore
