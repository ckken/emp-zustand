import {useEffect, useRef} from 'react'
import {type YYEvaType, version, yyEva} from 'yyeva'
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
        videoUrl: `https://yyeva.yy.com/yy/aspectFill.mp4`,
        autoplay: false,
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
      <div className="container" ref={div} />
    </div>
  )
}
export default YYEVA
