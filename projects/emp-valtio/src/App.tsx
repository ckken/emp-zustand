import {Refresh} from './Refresh'
//
import {proxy, useSnapshot} from 'valtio'
const state = proxy({
  dur: 4,
  count: 216,
})
const incDur = () => {
  ++state.dur
}
const decDur = () => {
  --state.dur
}
const ShowwDur = () => {
  const snap = useSnapshot(state)
  return (
    <h1>
      Snap Count: {snap.count} <Refresh />
    </h1>
  )
}
const App = () => {
  const snap = useSnapshot(state)

  return (
    <div>
      <ShowwDur />
      <button onClick={decDur}>-</button>
      <button onClick={incDur}>+</button>
      <Refresh />
    </div>
  )
}

export default App
