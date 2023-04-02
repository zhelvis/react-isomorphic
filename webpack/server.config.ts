import path from 'path'
import NodemonPlugin from 'nodemon-webpack-plugin'
import nodeExternals from 'webpack-node-externals'
import TerserPlugin from 'terser-webpack-plugin'

const mode = process.env.NODE_ENV
const isDev = mode === 'development'

export default {
  mode,
  optimization: {
    minimize: !isDev,
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.swcMinify,
      }),
    ],
  },
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
            loader: 'swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                  dynamicImport: false,
                },
              },
            },
          },
        ],
      },
    ],
  },
  plugins: isDev ? [new NodemonPlugin()] : [],
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, '../'),
    filename: 'server.js',
    publicPath: '/',
  },
}
