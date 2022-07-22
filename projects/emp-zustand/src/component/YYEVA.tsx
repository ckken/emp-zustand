import {yyEva, YYEvaType, version} from 'yyeva'
import {useEffect, useRef} from 'react'
import {Refresh} from './App'
const YYEVA = () => {
  const div = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let evideo: YYEvaType

    if (div) {
      yyEva({
        mode: 'AspectFill',
        alphaDirection: 'right',
        container: div.current as HTMLElement,
        videoUrl: `/video/fullbg.mp4`,
      }).then(v => {
        evideo = v
        evideo.start()
      })
    }
    return () => {
      evideo && evideo.destroy()
    }
  }, [])
  return (
    <div className="yyeva">
      <h1 className="title">
        YYEVA {version}
        <a href="https://github.com/yylive/YYEVA-Web" target="_blank" rel="noreferrer">
          Github
        </a>
        <Refresh />
      </h1>
      <div className="container" ref={div}></div>
    </div>
  )
}
export default YYEVA
