var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
module.exports = {
  context: __dirname,
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      sourceDir: path.resolve(__dirname, 'src'),
      sourceReactNotes: path.resolve(__dirname, 'src/notes'),
      sourceReactUsers: path.resolve(__dirname, 'src/users'),    
      sourceRedux: path.resolve(__dirname, 'src/redux'),
    }
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
      //  loader: ['babel-loader', 'eslint-loader'],
		loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    })
  ]
}