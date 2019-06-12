var path = require('path')
var utils = require('./utils')
var config = require('../config')
const nodeExternals = require('webpack-node-externals');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/app.js',
  },
  target: 'node',
  output: {
    path: 'build/node',
    filename: 'ssr.js',
    libraryExport: 'default',
    libraryTarget: 'commonjs2',
  },
  //避免把node_modules里的库都打包进去，此ssr js会直接运行在node端，
  //所以不需要打包进最终的文件中，运行时会自动从node_modules里加载
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      'src': resolve('src')
    }
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    }]
  }
}