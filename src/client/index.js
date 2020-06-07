import React from 'react'
import ReactDOM from 'react-dom'
import { loadableReady } from '@loadable/component'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

import App from '../shared/App'

loadableReady(() => {
  ReactDOM.hydrate(
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>,
    document.getElementById('root')
  )
})
