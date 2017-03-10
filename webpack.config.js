var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(),
  devtool: 'source-map',
  entry: [
    './js/index'
  ],
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.cjsx', '.coffee']
  },
  output: {
    path: path.resolve('public'),
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node-modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
      {
        test: /\.cjsx$/,
        loaders: ['coffee', 'cjsx']
      },
      {
        test: /\.coffee$/,
        loader: 'coffee'
      },
      {
        test: /\.png$/,
        loader: 'file-loader'
      }
    ]
  }
};
