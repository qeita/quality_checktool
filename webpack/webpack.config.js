const path = require('path');
const webpack = require('webpack');

const config = {
  context: path.resolve(__dirname, '../_dev/assets/js'),
  entry: {
    app: './app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
};

module.exports = config;