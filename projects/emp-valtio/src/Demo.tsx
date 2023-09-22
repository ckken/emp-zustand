import {useSnapshot} from 'valtio'
import {useState} from './store'

function App() {
  const snap = useSnapshot(useState)
  const handleClick = () => {
    useState.changeName()
  }
  return (
    <div>
      {snap.fullName}
      <button onClick={handleClick}>+1</button>
    </div>
  )
}

export default App
