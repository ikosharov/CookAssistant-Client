var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var webPackServerPort = 3000;

new WebpackDevServer(webpack(config), {
  contentBase: './public',
  publicPath: "/",
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(webPackServerPort, 'localhost', function (err) {
  console.log('Listening at localhost:' + webPackServerPort);
});

