var
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  argv = process.argv,
  isProd = ~argv.indexOf('--prod'),
  isHot = ~argv.indexOf('--hot'),
  webpack = require('webpack'),
  pkg = require('./package.json'),
  path = require('path'),
  version = pkg.version,
  homePage = pkg.homepage,
  config, loaders;

config = {
  entry: [
    './src/tourUI'
  ],
  output: {
    path: './dist',
    filename: 'tourUI' + (isProd ? '.min' : '') + '.js',
    library: 'tourUI',
    libraryTarget: 'umd'
  },
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel?stage=0'] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css') }
    ]
  },
  plugins: [
    new ExtractTextPlugin('tourUI' + (isProd ? '.min' : '') + '.css', { allChunks: true }),
    new webpack.BannerPlugin(
      'tourUI v' + version + '\n' +
      '(c) 2014-' + new Date().getFullYear() + ' Ctrip Tour'
    )
  ]
};

if (isProd) {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  );
};

if (isHot) {
  loaders = config.module.loaders;
  loaders[0].loaders.unshift('react-hot');
  loaders[0].include = [path.join(__dirname, 'dev'), path.join(__dirname, 'src')];
  loaders[1].loader = 'style!css';
  config.entry = ['webpack-dev-server/client?http://localhost:3333', 'webpack/hot/only-dev-server', './dev/index'];
  config.output = {
    publicPath: '/dev/',
    path: path.join(__dirname, 'dev'),
    filename: 'bundle.js'
  };
  config.externals.pop();
  config.plugins.pop();
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}

module.exports = config;