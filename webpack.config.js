const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.join(__dirname, '/dist'),
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
      use: extractTextPlugin.extract(
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
        template: './public/index.html' // Source html.
    }),

    new extractTextPlugin({ filename: 'css/style.css' })
  ]
}
