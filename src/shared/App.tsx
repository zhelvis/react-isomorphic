import React from 'react'
import { Router } from '@reach/router'
import loadable from '@loadable/component'
import { PublicRoute, ProtectedRoute } from './components/routes'

const Main = loadable(() => import('./pages/Main'))
const Second = loadable(() => import('./pages/Second'))
const NotFound = loadable(() => import('./pages/NotFound'))
const Login = loadable(() => import('./pages/Login'))

const App: React.FC = () => (
  <Router>
    <PublicRoute path="/login" component={Login} />
    <PublicRoute default component={NotFound} />
    <ProtectedRoute path="/" component={Main} />
    <ProtectedRoute path="/second" component={Second} />
  </Router>
)

export default App
