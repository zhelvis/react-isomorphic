import path from 'path'
import express from 'express'
import React from 'react'
import { ChunkExtractor } from '@loadable/server'
import { renderToString } from 'react-dom/server'
import { ServerLocation } from '@reach/router'
import { Helmet } from 'react-helmet'

import htmlTemplate from './htmlTemplate'
import App from '../shared/App'
import { port } from '../../config'

const app = express()

app.use(express.static('dist'))

const statsFile = path.resolve('./dist/loadable-stats.json')

app.get('*', (req, res) => {
  const extractor = new ChunkExtractor({ statsFile })

  const markup = renderToString(
    extractor.collectChunks(
      <ServerLocation url={req.url}>
        <App />
      </ServerLocation>
    )
  )

  const helmet = Helmet.renderStatic()
  const scripts = extractor.getScriptTags()

  res.send(htmlTemplate({ html: markup, helmet, scripts }))
})

app.listen(port, () => console.log(`app started on ${port} port`))
