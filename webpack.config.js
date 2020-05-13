const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => ({
  entry: ['@babel/polyfill', './src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file-loader?name=[name].[ext]' // <-- retain original file name
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: env ? 'production' : 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin({}),
    new HtmlWebpackPlugin({
      template: 'dist/index.html'
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  }
});
