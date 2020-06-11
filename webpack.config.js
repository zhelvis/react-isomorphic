/*eslint-disable*/
const NodemonPlugin = require('nodemon-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const LoadablePlugin = require('@loadable/webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const mode = process.env.NODE_ENV
const isDev = mode === 'development'

const getConfig = ({ isSsr }) => ({
  mode,
  entry: isSsr
    ? './src/server/index.tsx'
    : {
        main: './src/client/index.tsx',
      },
  ...(isSsr && { target: 'node' }),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|ts)x?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.(js|ts)x?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: isSsr ? 'node 10' : '> 0.25%, not dead',
                    ...(!isSsr && {
                      useBuiltIns: 'usage',
                      corejs: { version: 3, proposals: true },
                    }),
                  },
                ],
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
              plugins: [
                ...(isSsr ? ['babel-plugin-dynamic-import-node'] : []), // prevents code splitting on server
                '@loadable/babel-plugin',
              ],
            },
          },
        ],
      },
    ],
  },
  ...(!isSsr && {
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*.js', 'loadable-stats.json'],
      }),
      new LoadablePlugin(),
    ],
  }),
  ...(isSsr &&
    isDev && {
      plugins: [new NodemonPlugin()],
    }),
  ...(isSsr && {
    externals: nodeExternals(),
  }),
  output: {
    path: isSsr ? `${__dirname}` : `${__dirname}/dist`,
    filename: isSsr ? 'server.js' : '[name].js',
    publicPath: '/',
  },
})

const client = getConfig({ isSsr: false })
const server = getConfig({ isSsr: true })

module.exports = [client, server]
