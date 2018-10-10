const path = require('path');

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
  resolve: {
    extensions: ['.js', '.jsx']
  },
  watch: true
};