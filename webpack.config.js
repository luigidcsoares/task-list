const Path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WebpackServiceWorker = require('serviceworker-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
      path: Path.join(__dirname, '/dist'),
      filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract(
        {
          fallback: 'style-loader',
          use: ['css-loader']
        }
      )
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader'
        }
      ]
    }]
  },
  plugins: [
    new htmlWebpackPlugin({
      hash: true,
      filename: 'index.html', // Target html.
      favicon: './public/images/icons/favicon.ico', // Favicon.
      template: './public/index.html' // Source html.
    }),

    new ExtractTextPlugin({ filename: 'css/style.css' }),
    new WebpackPwaManifest({
      inject: true,
      filename: 'manifest.webmanifest',
      name: 'PWA Task List',
      short_name: 'Task List',
      descriptions: 'A simple PWA for keep tracking your tasks.',
      theme_color: '#2196f3',
      background_color: '#9f9f9f',
      display: 'standalone',
      scope: '.',
      start_url: '/',
      icons: [
        {
          src: Path.join(__dirname, 'public/images/icons/icon.png'),
          sizes: [72, 96, 128, 144, 152, 192, 384, 512]
        }
      ]
    }),

    new WebpackServiceWorker({ entry: Path.join(__dirname, 'src/sw.js') })
  ]
}
