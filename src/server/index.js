const path = require('path')
import express from 'express'
import React from 'react'
import { ChunkExtractor } from '@loadable/server'
import { renderToString } from 'react-dom/server'
import { ServerLocation } from '@reach/router'
import { HelmetProvider } from 'react-helmet-async'

import htmlTemplate from './htmlTemplate'
import App from '../shared/App'
import { port } from '~/config'

const app = express()

app.use(express.static('dist'))

const statsFile = path.resolve('./dist/loadable-stats.json')

app.get('*', (req, res) => {
  const helmetContext = {}
  const extractor = new ChunkExtractor({ statsFile })
  const markup = renderToString(
    extractor.collectChunks(
      <HelmetProvider context={helmetContext}>
        <ServerLocation url={req.url}>
          <App />
        </ServerLocation>
      </HelmetProvider>
    )
  )

  const { helmet } = helmetContext
  const scripts = extractor.getScriptTags()

  res.send(htmlTemplate(markup, helmet, scripts))
})

app.listen(port, () => console.log(`app started on ${port} port`))
