/* eslint-disable @typescript-eslint/no-var-requires */
process.traceDeprecation = true

module.exports = [
  require('./webpack/client.config'),
  require('./webpack/server.config'),
]
