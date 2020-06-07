const path = require('path')
import express from 'express'
import React from 'react'
import { ChunkExtractor } from '@loadable/server'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import htmlTemplate from './htmlTemplate'
import App from '../shared/App'
import routes from '../shared/routes'
import { port } from '~/config'

const app = express()

app.use(express.static('dist'))

const statsFile = path.resolve('./dist/loadable-stats.json')

app.get('*', (req, res) => {
  const routerContext = routes.find((route) => matchPath(req.url, route))
  const helmetContext = {}
  const extractor = new ChunkExtractor({ statsFile })
  const markup = renderToString(
    extractor.collectChunks(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={req.url} context={routerContext}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    )
  )

  const { helmet } = helmetContext
  const scripts = extractor.getScriptTags()

  res.send(htmlTemplate(markup, helmet, scripts))
})

app.listen(port, () => console.log(`app started on ${port} port`))
