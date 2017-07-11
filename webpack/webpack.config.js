const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  context: path.resolve(__dirname, '../_dev/assets'),
  entry: {
    app: './js/app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'postcss-loader',
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './css/style.css',
      allChunks: true
    })
  ],
  stats: {
    colors: true
  },
};

module.exports = config;