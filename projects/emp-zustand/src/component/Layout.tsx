import {Refresh} from 'src/component/App'
import useCommonStore from 'src/store/CommonStore'
import {useEffect} from 'react'
import {RouterNav, RouterContent} from 'src/router/config'
//
const Tags = () => {
  const commonStore = useCommonStore(state => state)
  const {reactDomVersion, reactVersion, chromeVersion} = commonStore
  useEffect(() => {
    commonStore.init()
  }, [])
  return (
    <p className="tags">
      <span>React@{reactVersion}</span>
      <span>ReactDom@{reactDomVersion}</span>
      <span>ReactRouter@16</span>
      <span>Zustand@4</span>
      <span>EMP@2</span>
      {chromeVersion ? <span>Chrome@{chromeVersion}</span> : null}
      <Refresh />
    </p>
  )
}
export const Layout = (props: any) => {
  // const reactVersion = useCommonStore(state => state.reactVersion)
  // const reactDomVersion = useCommonStore(state => state.reactDomVersion)
  // const chromeVersion = useCommonStore(state => state.chromeVersion)
  // const initCommon = useCommonStore(state => state.init)
  // ///////////////////////////////////
  // const params = useParams()
  // // const pathname = useResolvedPath()
  // const location = useLocation()
  // console.log(params, location)
  return (
    <div className="layout">
      <div className="github">
        <a href="https://github.com/ckken/emp-zustand" target="_blank" rel="noreferrer">
          Github EMP 2.5 SWC
        </a>
      </div>
      <nav className="nav">
        <div className="wrap">
          <div className="logo">EMP Zustand</div>
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
