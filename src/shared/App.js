import React from 'react'
import { Router } from '@reach/router'

import Foo from './pages/Main'
import NotFound from './pages/NotFound'

const App = () => (
  <Router>
    <Foo path="/" />
    <NotFound default />
  </Router>
)

export default App
