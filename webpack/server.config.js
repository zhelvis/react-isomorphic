/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const ESLintPlugin = require('eslint-webpack-plugin')

const mode = process.env.NODE_ENV
const isDev = mode === 'development'

module.exports = {
  mode,
  entry: './src/server/index.tsx',
  target: 'node',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
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
                    targets: 'node 14',
                  },
                ],
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                  },
                ],
                '@babel/preset-typescript',
              ],
              plugins: [
                'babel-plugin-dynamic-import-node', // prevents code splitting on server
                '@loadable/babel-plugin',
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({ fix: true }),
    ...(isDev ? [new NodemonPlugin()] : []),
  ],
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, '../'),
    filename: 'server.js',
    publicPath: '/',
  },
}
