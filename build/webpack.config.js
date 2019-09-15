const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve('./src/main.js'),
  output: {
    path: path.resolve('./dist'),
    filename: '[name].[hash:8].js'
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: 'eslint-loader',
      //     options: {
      //       enforce: 'pre'
      //     }
      //   },
      //   exclude: /node_modules/,
      //   include: path.resolve('./src')
      // },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-syntax-dynamic-import'
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'image/[name].[hash:8].[ext]',
            publicPath: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/'
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'media/[name].[hash:8].[ext]',
            publicPath: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/'
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'fonts/[name].[hash:8].[ext]',
            publicPath: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/'
          }
        }
      },
      {
        test: /\.(html|htm)$/,
        use: 'html-withimg-loader'
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: {
      rewrites: [{
        from: /.*/,
        to: path.posix.join('/', 'index.html')
      }, ]
    },
    port: 3000,
    contentBase: './dist',
    hot: true
  },
  watch: true,
  watchOptions: {
    poll: 1000, // 监听频率
    aggregateTimeout: 500, // 防抖
    ignored: /node_modules/
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css', '.scss', '.less'],
    alias: {
      "@": path.resolve('./src')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html'),
      filename: 'index.html',
      title: '岁月如歌的博客',
      favicon: path.resolve('./public/blog.ico')
    }),
    new VueLoaderPlugin(),
    new webpack.BannerPlugin('This is a personal blog.'),
    new webpack.NamedChunksPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      mode: JSON.stringify(process.env.NODE_ENV)
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
      chunkFilename: '[id].[hash:8].css'
    }),
    new WebpackDeepScopeAnalysisPlugin()
  ]
}
