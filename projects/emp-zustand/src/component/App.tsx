import useActionStore from 'src/store/ActionStore'
import useCodeStore from 'src/store/CodeStore'
import useKeyDown from 'src/hook/useKeyDown'
export const Refresh = () => <span className="refresh">{Math.round(Math.random() * 1000)}</span>
export const ShowCount = () => {
  const bears = useActionStore(state => state.bears)
  return (
    <h1>
      {bears.tips}Count: {bears.count} <Refresh />
    </h1>
  )
}
export const ControlsBox = () => {
  const increasePopulation = useActionStore(state => state.increasePopulation)
  const decreasePopulation = useActionStore(state => state.decreasePopulation)
  const removeAllBears = useActionStore(state => state.removeAllBears)
  const tips = useActionStore(state => state.bears.tips)
  // const {increasePopulation,decreasePopulation,removeAllBears} = useActionStore(state => state)
  return (
    <>
      <h2>Control Count</h2>
      <h1>
        {tips}Tips <Refresh />
      </h1>
      <ShowCount />
      <p>
        <button onClick={increasePopulation}>Inc</button>-<button onClick={decreasePopulation}>Dec</button>-
        <button onClick={removeAllBears}>Clean</button>
      </p>
    </>
  )
}
export const Controls = () => {
  // const {bears,increasePopulation,decreasePopulation,removeAllBears} = useActionStore(state => state)
  // const increasePopulation = useActionStore(state => state.increasePopulation)
  // const decreasePopulation = useActionStore(state => state.decreasePopulation)
  // const removeAllBears = useActionStore(state => state.removeAllBears)
  return (
    <div className="controls">
      <h1>
        Controls
        <Refresh />
      </h1>

      <ControlsBox />
    </div>
  )
}
export const Code = () => {
  const {code, fetchRemote, cleanCode} = useCodeStore(state => state)
  // const fetchRemote = useCodeStore(state => state.fetchRemote)
  // const cleanCode = useCodeStore(state => state.cleanCode)
  return (
    <div className="code">
      <h1>
        Code
        <Refresh />
      </h1>
      <p>
        <button onClick={fetchRemote}>Fetch</button>-<button onClick={cleanCode}>Clean</button>
      </p>
      <pre className="code">{Object.keys(code).length > 0 ? JSON.stringify(code, null, 2) : null}</pre>
    </div>
  )
}
export const App = () => {
  const {key, keyDisable, changeDisable} = useKeyDown()
  return (
    <>
      <h1>
        Home - List: key: {key.toString()}
        <Refresh />
      </h1>
      <button style={{color: '#eee', backgroundColor: keyDisable ? 'red' : 'green', border: 0}} onClick={changeDisable}>
        keydown
      </button>
      <Controls />
      <Code />
    </>
  )
}
export default App
