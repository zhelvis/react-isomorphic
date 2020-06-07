import loadable from '@loadable/component'

const Main = loadable(() => import('./pages/Main'))
const Second = loadable(() => import('./pages/Second'))
const NotFound = loadable(() => import('./pages/NotFound'))

export default [
  {
    path: '/',
    exact: true,
    component: Main,
  },
  {
    path: '/second',
    exact: true,
    component: Second,
  },
  {
    path: '*',
    exact: false,
    component: NotFound,
  },
]
