import React from 'react'
import loadable from '@loadable/component'
import { Router } from '@reach/router'

const Main = loadable(() => import('./pages/Main'))
const Second = loadable(() => import('./pages/Second'))
const NotFound = loadable(() => import('./pages/NotFound'))

const App = () => (
  <Router>
    <Main path="/" />
    <Second path="/second" />
    <NotFound default />
  </Router>
)

export default App
