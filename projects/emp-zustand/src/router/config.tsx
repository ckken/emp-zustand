import {lazy, Suspense} from 'react'
import type {RouteObject} from 'react-router-dom'
import {useRoutes, NavLink, Outlet} from 'react-router-dom'
import {Layout} from 'src/component/Layout'

//
const App = lazy(() => import('src/component/App'))
const List = lazy(() => import('src/component/List'))
const YYEVA = lazy(() => import('src/component/YYEVA'))
//
export const RouterNav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/" className={({isActive}) => (isActive ? 'actived' : '')}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/list" className={({isActive}) => (isActive ? 'actived' : '')}>
          List
        </NavLink>
      </li>
      <li>
        <NavLink to="/yyeva" className={({isActive}) => (isActive ? 'actived' : '')}>
          YYEVA
        </NavLink>
      </li>
    </ul>
  )
}
//
export const RouterConfig = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {index: true, element: <App />},
        {
          path: '/list',
          element: <List />,
        },
        {
          path: '/yyeva',
          element: <YYEVA />,
        },
        {path: '*', element: <App />},
      ],
    },
  ]
  const element = useRoutes(routes)
  return element
}
//
export const RouterContent = () => {
  return (
    <Suspense fallback="loading...">
      <Outlet />
    </Suspense>
  )
}
