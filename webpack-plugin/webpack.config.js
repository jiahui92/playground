const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: false,
  },
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'loaders')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.ts$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue.js',
          options: {
            data: 'vue',
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};