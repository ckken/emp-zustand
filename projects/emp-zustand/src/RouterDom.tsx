import {lazy, Suspense, useEffect} from 'react'
import type {RouteObject} from 'react-router-dom'
import useCommonStore from './store/CommonStore'
import {
  Outlet,
  NavLink,
  useRoutes,
  BrowserRouter,
  HashRouter,
  useParams,
  useResolvedPath,
  useLocation,
} from 'react-router-dom'
import {Refresh} from './component/App'
// import {Controls, Code, App} from './component/App'
//
const App = lazy(() => import('./component/App'))
const List = lazy(() => import('./component/List'))
//
export const Layout = (props: any) => {
  // const reactVersion = useCommonStore(state => state.reactVersion)
  // const reactDomVersion = useCommonStore(state => state.reactDomVersion)
  // const chromeVersion = useCommonStore(state => state.chromeVersion)
  // const initCommon = useCommonStore(state => state.init)
  const commonStore = useCommonStore(state => state)
  const {reactDomVersion, reactVersion, chromeVersion} = commonStore
  // const params = useParams()
  // // const pathname = useResolvedPath()
  // const location = useLocation()
  // console.log(params, location)
  useEffect(() => {
    commonStore.init()
  }, [])
  return (
    <div className="layout">
      <nav className="nav">
        <div className="wrap">
          <div className="logo">
            EMP Zustand
            <Refresh />
          </div>
          <ul>
            <li>
              <NavLink to="/" className={({isActive}) => (isActive ? 'actived' : '')}>
                Home
              </NavLink>
            </li>
            {/* <li>
            <NavLink to="/controls" className={({isActive}) => (isActive ? 'actived' : '')}>
              Controls
            </NavLink>
          </li> */}
            <li>
              <NavLink to="/list" className={({isActive}) => (isActive ? 'actived' : '')}>
                List
              </NavLink>
            </li>
            <li>
              <a href="https://github.com/ckken/emp-zustand" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
          </ul>
        </div>
        <p className="tags">
          <span>React@{reactVersion}</span>
          <span>ReactDom@{reactDomVersion}</span>
          <span>ReactRouter@16</span>
          <span>Zustand@4</span>
          <span>EMP@2</span>
          {chromeVersion ? <span>Chrome@{chromeVersion}</span> : null}
        </p>
      </nav>

      <div className="content">
        <Suspense fallback="loading...">
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export const RouterConfig = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {index: true, element: <App />},
        // {
        //   path: '/controls',
        //   element: <Controls />,
        // },
        {
          path: '/list',
          element: <List />,
        },
        {path: '*', element: <App />},
      ],
    },
  ]
  const element = useRoutes(routes)
  return element
}
export const RouterDom = () => (
  <HashRouter>
    <RouterConfig />
  </HashRouter>
)
