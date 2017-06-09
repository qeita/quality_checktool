const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

const config = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../_pub/assets/js'),
    filename: '[name].min.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { screw_ie8: false, warnings: false } })
  ]
});

module.exports = config;