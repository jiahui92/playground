const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.production;
const devtool = isProduction ? 'cheap-module-source-map' : 'cheap-module-eval-source-map';

module.exports = {
  devtool,
  devServer: {
    hot: true,
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js|.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
      }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};