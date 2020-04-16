const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './frontend/pages/index.js',
  output: {
    filename: 'assets/[name]-[hash:8].js'
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    proxy: [{
      context: '/api',
      target: 'http://localhost:7001', // eggjs server port
    }],
  },
  module: {
    rules: [
      {
        test: /\.js|.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.less$/,
        use: [ 'style-loader', 'css-loader', 'postcss-loader', 'less-loader' ],
      },
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/template/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
