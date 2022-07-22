import create from 'zustand'
interface ActionStoreType {
  bears: number
  increasePopulation: () => void
  decreasePopulation: () => void
  removeAllBears: () => void
}
const useActionStore = create<ActionStoreType>()(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({bears: state.bears + 1})),
  decreasePopulation: () => set(state => ({bears: state.bears - 1})),
  removeAllBears: () => set({bears: 0}),
}))

export default useActionStore
