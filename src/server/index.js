import express from 'express'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerLocation } from '@reach/router'
import { Helmet } from 'react-helmet'

import htmlTemplate from './htmlTemplate'
import App from '../shared/App'
import config from '../../config'

const app = express()

app.use(express.static('dist'))

app.get('*', (req, res) => {
  const markup = renderToString(
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  )
  const helmet = Helmet.renderStatic()
  res.send(htmlTemplate(markup, helmet))
})

app.listen(config.port)
