import path from 'path'
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
  entry: {
    index: './src/client/index.tsx',
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
            loader: 'swc-loader',
            options: {
              env: {
                mode: 'usage',
                coreJs: '3.29',
              },
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                  dynamicImport: true,
                },
              },
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/',
    clean: true,
  },
}
