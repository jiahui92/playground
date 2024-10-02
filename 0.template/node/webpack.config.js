const webpack = require('webpack');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const devtool = isProduction ? 'source-map' : 'cheap-module-source-map';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool,
  devServer: {
    // host: '0.0.0.0', // lan network
    hot: true,
    compress: true,
    port: 9000
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js|.ts?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};