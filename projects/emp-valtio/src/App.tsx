import {Refresh} from './Refresh'
import './style.css'
const waitAsync = (time = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}
//
import {proxy, useSnapshot} from 'valtio'
const state = proxy({
  dur: 4,
  config: {
    count: 1,
    info: 'count',
  },
  incDur() {
    ++state.dur
  },
  decDur() {
    --state.dur
  },
  async setCountAsync() {
    await waitAsync(500)
    state.config.count++
  },
  changeConfigInfo() {
    state.config.info = `${Math.round(Math.random() * 100000)}`
  },
})

const ShowwDur = () => {
  const snap = useSnapshot(state)
  return (
    <>
      <h1>
        Snap Dur: {snap.dur} <Refresh />
      </h1>
    </>
  )
}
const Control = () => {
  const snap = useSnapshot(state)
  return (
    <>
      <button className="btn" onClick={snap.decDur}>
        -
      </button>
      <button className="btn" onClick={snap.incDur}>
        +
      </button>
      <button className="btn" onClick={snap.setCountAsync}>
        Count Async Plus
      </button>
      <button className="btn" onClick={snap.changeConfigInfo}>
        Change Config Info
      </button>
      <Refresh />
    </>
  )
}
const Code = () => {
  const snap = useSnapshot(state)
  return (
    <div>
      <h2>Store Code</h2>
      <pre>
        {`import {proxy, useSnapshot} from 'valtio'
const state = proxy({
  dur: 4,
  config: {
    count: 1,
    info: 'count',
  },
  incDur() {
    ++state.dur
  },
  decDur() {
    --state.dur
  },
  async setCountAsync() {
    await waitAsync(500)
    state.config.count++
  },
})`}
      </pre>
    </div>
  )
}
const ShowInfo = () => {
  const snap = useSnapshot(state)
  return (
    <h3>
      Count Info {snap.config.info} <Refresh />
    </h3>
  )
}
const ShowCount = () => {
  const snap = useSnapshot(state)
  return (
    <h2>
      Snap Count: {snap.config.count} <Refresh />
    </h2>
  )
}
const App = () => {
  return (
    <div>
      <h1>
        Valtio Store{' '}
        <a
          target="_blank"
          href="https://github.com/ckken/emp-zustand/blob/main/projects/emp-valtio/src/App.tsx"
          rel="noreferrer"
        >
          GitHub Code
        </a>
        <Refresh>TIM </Refresh>
      </h1>
      <ShowInfo />
      <ShowwDur />
      <ShowCount />
      <Control />
      <Code />
    </div>
  )
}

export default App
