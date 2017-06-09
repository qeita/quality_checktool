const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

const config = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../_pre/assets/js'),
    filename: '[name].js'
  },
  devtool: 'source-map'
});

module.exports = config;