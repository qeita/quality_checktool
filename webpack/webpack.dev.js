const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

const config = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../_pre/assets'),
    filename: './js/[name].js'
  },
  // devtool: 'source-map'
});

module.exports = config;