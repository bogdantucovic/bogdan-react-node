const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, '/client/src/app.jsx')],
  output: {
    path: path.join(__dirname, '/server/static/js'),
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '/client/src'),
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", 
          "css-loader", 
          "sass-loader" 
        ]
      }
    ]
  },
  plugins:[
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};