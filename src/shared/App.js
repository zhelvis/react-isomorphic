import React from 'react'
import { Router } from '@reach/router'

import Main from './pages/Main'
import NotFound from './pages/NotFound'

const App = () => (
  <Router>
    <Main path="/" />
    <NotFound default />
  </Router>
)

export default App
