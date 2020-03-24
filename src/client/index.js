import React from 'react'
import ReactDOM from 'react-dom'
import { loadableReady } from '@loadable/component'
import { HelmetProvider } from 'react-helmet-async'

import App from '../shared/App'

loadableReady(() => {
  ReactDOM.hydrate(
    <HelmetProvider>
      <App />
    </HelmetProvider>,
    document.getElementById('root')
  )
})
