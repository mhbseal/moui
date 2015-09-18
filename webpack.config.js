var
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  isProdEnv = ~process.argv.indexOf('--prod'),
  webpack = require('webpack'),
  pkg = require('./package.json'),
  version = pkg.version,
  homePage = pkg.homepage,
  config;

config = {
  entry: './src',
  output: {
    path: './dist',
    filename: 'tourUI-' + version + (isProdEnv ? '.min' : '') + '.js',
    library: 'tourUI',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};


module.exports = config;