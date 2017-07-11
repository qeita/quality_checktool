module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-properties': {},
    'postcss-nesting': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
    'csswring': {}
  },
};