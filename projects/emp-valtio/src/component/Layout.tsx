import {useEffect} from 'react'
import {Refresh} from 'src/component/App'
import {RouterContent, RouterNav} from 'src/router/config'
import CommonState from 'src/store/CommonStore'
//
const Tags = () => {
  const store = CommonState.store
  const {reactDomVersion, reactVersion, chromeVersion} = store
  useEffect(() => {
    store.init()
  }, [])
  return (
    <p className="tags">
      <span>React@{reactVersion}</span>
      <span>ReactDom@{reactDomVersion}</span>
      <span>ReactRouter@16</span>
      <span>Zustand@4</span>
      <span>EMP@2.5 & SWC</span>
      {chromeVersion ? <span>Chrome@{chromeVersion}</span> : null}
      <Refresh />
    </p>
  )
}
export const Layout = (props: any) => {
  return (
    <div className="layout">
      <div className="github">
        <a href="https://github.com/ckken/emp-zustand" target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
      <nav className="nav">
        <div className="wrap">
          <div className="logo">
            <a href="/">EMP Valtio</a>
          </div>

          <RouterNav />
        </div>
        <Tags />
      </nav>

      <div className="content">
        <RouterContent />
      </div>
    </div>
  )
}
