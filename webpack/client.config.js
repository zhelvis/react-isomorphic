/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const LoadablePlugin = require('@loadable/webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const mode = process.env.NODE_ENV
const isDev = mode === 'development'

module.exports = {
  mode,
  optimization: {
    minimize: !isDev,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  entry: {
    main: './src/client/index.tsx',
  },
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
                    targets: '> 0.2%, not dead, not op_mini all',
                    useBuiltIns: 'usage',
                    corejs: { version: 3, proposals: true },
                  },
                ],
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                    development: isDev,
                    importSource: '@welldone-software/why-did-you-render',
                  },
                ],
                '@babel/preset-typescript',
              ],
              plugins: ['@loadable/babel-plugin'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({ fix: true }),
    new LoadablePlugin({
      outputAsset: false,
      writeToDisk: {
        filename: path.join(__dirname, '../'),
      },
    }),
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/',
    clean: true,
  },
}
