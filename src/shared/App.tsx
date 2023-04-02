import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import Main from './pages/Main'
import Second from './pages/Second'
import NotFound from './pages/NotFound'

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/second" element={<Second />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default App
