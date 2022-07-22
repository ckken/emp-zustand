import {Controls, Refresh} from './App'
import useListStore from 'src/store/ListStore'
import {useEffect} from 'react'
const Scroll = () => {
  const {list, getList, listNum, changeListNum} = useListStore(state => state)
  useEffect(() => {
    getList()
  }, [])
  return (
    <div className="scroll">
      <div className="control">
        Count <b>{list.length}</b>
        <button onClick={getList}>fetch</button>
        <input
          value={listNum}
          onChange={e => {
            console.log(e)
            changeListNum(e.target.value)
          }}
        />
      </div>
      <ul>
        {list.map(d => {
          return <li key={d}>{d}</li>
        })}
      </ul>
    </div>
  )
}
const List = () => {
  return (
    <div className="list">
      <h1>
        List
        <Refresh />
      </h1>
      <Scroll />
    </div>
  )
}
export default List
