import path from 'path'
import express from 'express'
import React from 'react'
import { ChunkExtractor } from '@loadable/server'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Helmet } from 'react-helmet'

import htmlTemplate from './htmlTemplate'
import App from '../shared/App'
import { port } from '../../config'

const app = express()

app.use(express.static('dist'))

const statsFile = path.resolve('./loadable-stats.json')

app.get('*', (req, res) => {
  const extractor = new ChunkExtractor({ statsFile })

  const markup = renderToString(
    extractor.collectChunks(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    )
  )

  const helmet = Helmet.renderStatic()
  const scripts = extractor.getScriptTags()

  res.send(htmlTemplate({ html: markup, helmet, scripts }))
})

app.listen(port, () => console.log(`app started on ${port} port`))
