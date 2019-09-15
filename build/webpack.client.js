const { smart } = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = smart(baseConfig, {
  mode: 'development'
})
