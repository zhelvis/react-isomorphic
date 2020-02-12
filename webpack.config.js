const NodemonPlugin = require('nodemon-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const mode = process.env.NODE_ENV
const isDev = mode === 'development'

const config = {
  mode,
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
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
    ],
  },
}

const clientConfig = {
  ...config,
  entry: {
    main: './src/client/index.js',
  },
  module: {
    rules: [
      ...config.module.rules,
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: '> 0.25%, not dead',
                    useBuiltIns: 'usage',
                    corejs: { version: 3, proposals: true },
                  },
                ],
                '@babel/preset-react',
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*.js'],
    }),
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    publicPath: '/',
  },
}

const serverConfig = {
  ...config,
  entry: './src/server/index.js',
  target: 'node',
  module: {
    rules: [
      ...config.module.rules,
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: 'node 10',
                  },
                ],
                '@babel/preset-react',
              ],
            },
          },
        ],
      },
    ],
  },
  externals: nodeExternals(),
  output: {
    path: `${__dirname}`,
    filename: 'server.js',
    publicPath: '/',
  },
}

if (isDev) {
  serverConfig.plugins = [new NodemonPlugin()]
}

module.exports = [clientConfig, serverConfig]
