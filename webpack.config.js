const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const path = require('path');

module.exports = {
  plugins: [
    new NodePolyfillPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Zendaya',
      header: 'Welcome to Zendaya',
      metaDesc: 'Webpack Example Description',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  mode: 'development',
  output: {
    clean: true
  },
  devServer: {
    // contentBase: './dist',
    open: true
  },
  node: {
    fs: 'empty'
  }
};

