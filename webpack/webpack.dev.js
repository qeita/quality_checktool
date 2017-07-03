const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const autoprefixer = require('autoprefixer');

const config = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../_pre/assets/js'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          }),
          require('postcss-import')(),
          require('postcss-custom-properties')(),
          require('postcss-nesting')()
        ]
      }
    })
  ]
});

module.exports = config;