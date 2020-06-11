import * as React from 'react'
import { Router } from '@reach/router'

import loadable from '@loadable/component'

const Main = loadable(() => import('./pages/Main'))
const Second = loadable(() => import('./pages/Second'))
const NotFound = loadable(() => import('./pages/NotFound'))

const App: React.FC = () => (
  <Router>
    <Main path="/" />
    <Second path="/second" />
    <NotFound default />
  </Router>
)

export default App
