import {Controls, Refresh} from './App'
import useListStore from 'src/store/ListStore'
import {useEffect} from 'react'
import {Virtuoso} from 'react-virtuoso'
const ListItem = ({item}: any) => {
  return <li>{item}</li>
}
const Control = () => {
  const {list, getList, listNum, changeListNum} = useListStore(state => state)
  useEffect(() => {
    list.length === 0 && getList()
  }, [])
  return (
    <div className="control">
      Count <b>{list.length}</b>
      <input
        value={listNum}
        onChange={e => {
          console.log('changeListNum',e.target.value)
          changeListNum(e.target.value)
        }}
      />
      <button onClick={getList}>fetch</button>
    </div>
  )
}
const Scroll = () => {
  const {list} = useListStore(state => state)
  return (
    <div className="scroll">
      <ul>
        <Virtuoso
          style={{height: '400px'}}
          totalCount={list.length}
          itemContent={index => <ListItem item={list[index]} />}
        />
      </ul>
    </div>
  )
}
const List = () => {
  return (
    <div className="list">
      <h1 className="title">
        List
        <Refresh />
        <Control />
      </h1>
      <Scroll />
    </div>
  )
}
export default List
