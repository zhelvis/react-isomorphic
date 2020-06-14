// for ie11
import 'core-js/es/promise'
import 'core-js/stable/object/assign'

import React from 'react'
import ReactDOM from 'react-dom'
import { loadableReady } from '@loadable/component'
import { HelmetProvider } from 'react-helmet-async'
import { AuthProvider } from '../shared/components/AuthProvider'

import App from '../shared/App'

const { isAuth } = window.__AUTH_STATE__

delete window.__AUTH_STATE__

loadableReady(() => {
  ReactDOM.hydrate(
    <HelmetProvider>
      <AuthProvider isAuth={isAuth}>
        <App />
      </AuthProvider>
    </HelmetProvider>,
    document.getElementById('root')
  )
})
