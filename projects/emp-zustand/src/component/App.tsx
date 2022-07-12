import useActionStore from 'src/store/ActionStore'
import useCodeStore from 'src/store/CodeStore'
export const Refresh = () => <p>Refresh {Math.random()}</p>
export const Controls = () => {
  const bears = useActionStore(state => state.bears)
  const increasePopulation = useActionStore(state => state.increasePopulation)
  const decreasePopulation = useActionStore(state => state.decreasePopulation)
  const removeAllBears = useActionStore(state => state.removeAllBears)
  return (
    <div className="controls">
      <h1>Controls</h1>
      <Refresh />
      <p>{bears}</p>
      <p>
        <button onClick={increasePopulation}>increasePopulation</button>-
        <button onClick={decreasePopulation}>decreasePopulation</button>-
        <button onClick={removeAllBears}>removeAllBears</button>
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
      <h1>Code</h1>
      <Refresh />
      <pre>{code}</pre>
      <p>
        <button onClick={fetchRemote}>Fetch Remote</button>-<button onClick={cleanCode}>Clean Code</button>
      </p>
    </div>
  )
}
export const App = () => {
  return (
    <>
      <h1>Home</h1>
      <Refresh />
      <Controls />
      <Code />
    </>
  )
}
export default App
