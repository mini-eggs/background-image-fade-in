var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, 'src') + '/entry.js',
  output: {
    path: path.join(__dirname, 'browser'),
    filename: 'bundle.js',
    library: 'backgroundImageFadeIn',
    libraryTarget: 'var'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015'], 
          plugins: ['add-module-exports']
        }
      }
    ]
  },
  resolve: {
    extensions: [
      '.js'
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
}
