import express from 'express'
import React, { StrictMode } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

import App from '../shared/App'

const PORT = process.env.PORT || 8000

const app = express()

app.use(express.static('dist'))

app.get('*', (req, res) => {
  const { pipe } = renderToPipeableStream(
    <StrictMode>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </StrictMode>,
    {
      bootstrapScripts: ['/index.js'],
      onShellReady() {
        res.setHeader('Content-Type', 'text/html')
        pipe(res)
      },
    }
  )
})

app.listen(PORT, () => console.log(`app started on ${PORT} port`))
