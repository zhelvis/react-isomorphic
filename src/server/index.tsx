import path from 'path'
import express from 'express'
import session from 'express-session'
import React from 'react'
import { ChunkExtractor } from '@loadable/server'
import { renderToString } from 'react-dom/server'
import { ServerLocation } from '@reach/router'
import { HelmetProvider } from 'react-helmet-async'

import htmlTemplate from './htmlTemplate'
import App from '../shared/App'
import { AuthProvider } from '../shared/components/AuthProvider'
import { port } from '../../config'

const app = express()

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  })
)

app.use(express.static('dist'))

const statsFile = path.resolve('./dist/loadable-stats.json')

app.get('*', (req, res) => {
  const helmetContext = {}

  const extractor = new ChunkExtractor({ statsFile })

  const isAuth = !!req.session.auth

  const markup = renderToString(
    extractor.collectChunks(
      <HelmetProvider context={helmetContext}>
        <ServerLocation url={req.url}>
          <AuthProvider isAuth={isAuth}>
            <App />
          </AuthProvider>
        </ServerLocation>
      </HelmetProvider>
    )
  )

  const { helmet } = helmetContext
  const scripts = extractor.getScriptTags()

  res.send(htmlTemplate({ html: markup, helmet, scripts, isAuth }))
})

// fake api
app.post('/login', (req, res) => {
  req.session.auth = true
  res.end()
})

app.post('/logout', (req, res) => {
  req.session.destroy()
  res.end()
})

app.listen(port, () => console.log(`app started on ${port} port`))
