import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import loadable from '@loadable/component'

const Main = loadable(() => import('./pages/Main'))
const Second = loadable(() => import('./pages/Second'))
const NotFound = loadable(() => import('./pages/NotFound'))

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/second" element={<Second />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default App
