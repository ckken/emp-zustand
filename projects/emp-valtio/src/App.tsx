import {Refresh} from './Refresh'
import './style.css'
import {state} from './store'
import {subscribe, useSnapshot} from 'valtio'
import {useEffect, useState} from 'react'
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
      <button className="btn" onClick={snap.dec}>
        -
      </button>
      <button className="btn" onClick={snap.inc}>
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
      <h2>Store Defaut Code</h2>
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
      <h2>Store Class Code</h2>
      <pre>
        {`class ValtioProxy {
  constructor() {
    const state = bind(proxy(this))
    devtools(state, {name: this.constructor.name, enabled: true})
    return state
  }
}
class CountState extends ValtioProxy {
  public dur = 4
  public config = {
    count: 1,
    info: 'count',
  }

  inc() {
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
    this.config.info = ${Math.round(Math.random() * 100000)}
  }
}
export const state = new CountState()`}
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
const SubScribe = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    const unsub = subscribe(state, () => {
      // console.log('subscribe', state)
      setData(JSON.parse(JSON.stringify(state)))
    })
    return () => {
      unsub()
    }
  })
  return (
    <>
      <h2>
        SubScribe State <Refresh />
      </h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
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
      <SubScribe />
      <Code />
    </div>
  )
}

export default App
