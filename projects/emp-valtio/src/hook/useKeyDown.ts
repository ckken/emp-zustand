import {useCallback, useEffect, useState} from 'react'
let keyCount = 0
let keyDisable = true
const useKeyDown = () => {
  console.log('[useKeyDown function]')
  const [key, setKey] = useState(keyCount)
  const [disable, setDisable] = useState(keyDisable)
  const listener = useCallback((event: any) => {
    if (keyCount < 10000) keyCount += 1
    else keyCount = 0
    setKey(keyCount)
    console.log('[keydown listener]', keyCount, event.type)
  }, [])
  const changeDisable = useCallback(() => {
    keyDisable = !keyDisable
    console.log('keyDisable', keyDisable)
    setDisable(keyDisable)
  }, [])
  const mouseEventListenner = useCallback(() => {
    document.addEventListener('mousedown', listener, false)
    document.addEventListener('keydown', listener, false)
  }, [])
  const removeEventListener = useCallback(() => {
    document.removeEventListener('mousedown', listener, false)
    document.removeEventListener('keydown', listener, false)
  }, [])
  //
  useEffect(() => {
    console.log('[useKeyDown useEffect]', key)
    mouseEventListenner()
    return () => {
      removeEventListener()
    }
  }, [])
  //
  useEffect(() => {
    console.log('[useKeyDown useEffect disable]', disable)
    if (disable === true) {
      removeEventListener()
    } else {
      mouseEventListenner()
    }
  }, [disable])
  return {key, setKey, keyDisable: disable, changeDisable}
}

export default useKeyDown
