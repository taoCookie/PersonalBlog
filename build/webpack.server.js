const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');
const { smart } = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = smart(baseConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyjsPlugin({
        cache: true,    // 是否缓存
        parallel: true, // 是否并发打包
        sourceMap: true // 压缩完的JS源码映射
      }),
      new OptimizeCss()
    ],
    // 抽离公共代码块
    splitChunks: {
      cacheGroups: {
        common: {
          chunks: 'initial',
          minSize: 0,
          minChunks: 2
        },
        vendor: {
          priority: 1,
          test: /node_modules/,
          chunks: 'initial',
          minSize: 0,
          minChunks: 2
        }
      }
    },
  }
})
