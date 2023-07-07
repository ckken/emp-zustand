import useActionStore from 'src/store/ActionStore'
import useCodeStore from 'src/store/CodeStore'
import useKeyDown from 'src/hook/useKeyDown'
export const Refresh = () => <span className="refresh">{Math.round(Math.random() * 1000)}</span>
export const Controls = () => {
  const bears = useActionStore(state => state.bears)
  const increasePopulation = useActionStore(state => state.increasePopulation)
  const decreasePopulation = useActionStore(state => state.decreasePopulation)
  const removeAllBears = useActionStore(state => state.removeAllBears)
  return (
    <div className="controls">
      <h1>
        Controls
        <Refresh />
      </h1>

      <h1>{bears}</h1>
      <p>
        <button onClick={increasePopulation}>Inc</button>-<button onClick={decreasePopulation}>Dec</button>-
        <button onClick={removeAllBears}>Clean</button>
      </p>
    </div>
  )
}
export const Code = () => {
  const code = useCodeStore(state => state.code)
  const fetchRemote = useCodeStore(state => state.fetchRemote)
  const cleanCode = useCodeStore(state => state.cleanCode)
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
