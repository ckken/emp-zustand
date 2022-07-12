import type {RouteObject} from 'react-router-dom'
import {Outlet, NavLink, useRoutes, BrowserRouter, useParams, useResolvedPath, useLocation} from 'react-router-dom'
import {Controls, Code, App} from './component/App'
export const Layout = (props: any) => {
  // const params = useParams()
  // // const pathname = useResolvedPath()
  // const location = useLocation()
  // console.log(params, location)
  return (
    <div className="layout">
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" className={({isActive}) => (isActive ? 'actived' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/controls" className={({isActive}) => (isActive ? 'actived' : '')}>
              Controls
            </NavLink>
          </li>
          <li>
            <NavLink to="/code" className={({isActive}) => (isActive ? 'actived' : '')}>
              Code
            </NavLink>
          </li>
          <li>
            <a href="https://github.com/ckken/emp-zustand" target="_blank" rel="noreferrer">
              Github
            </a>
          </li>
        </ul>
      </nav>

      <div className="content">
        <h1>EMP Zustand Demo</h1>
        <p className="tags">
          <span>React@17</span>
          <span>ReactDom@17</span>
          <span>ReactRouter@16</span>
          <span>Zustand@4</span>
          <span>EMP@2</span>
        </p>
        <Outlet />
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
        {
          path: '/controls',
          element: <Controls />,
        },
        {
          path: '/code',
          element: <Code />,
        },
        {path: '*', element: <App />},
      ],
    },
  ]
  const element = useRoutes(routes)
  return element
}
export const RouterDom = () => (
  <BrowserRouter>
    <RouterConfig />
  </BrowserRouter>
)
