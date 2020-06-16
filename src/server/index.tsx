import path from 'path'
import express from 'express'
import React from 'react'
import { ChunkExtractor } from '@loadable/server'
import { renderToString } from 'react-dom/server'
import { ServerLocation } from '@reach/router'
import { HelmetProvider, HelmetData } from 'react-helmet-async'

import htmlTemplate from './htmlTemplate'
import App from '../shared/App'
import { port } from '../../config'

const app = express()

app.use(express.static('dist'))

const statsFile = path.resolve('./dist/loadable-stats.json')

interface FilledContext {
  helmet?: HelmetData;
}

app.get('*', (req, res) => {
  const helmetContext: FilledContext = {}

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

  res.send(htmlTemplate({ html: markup, helmet, scripts }))
})

app.listen(port, () => console.log(`app started on ${port} port`))
