var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
module.exports = {
  entry: './dev-server/index.js',
  output: {
      path: __dirname + '/build',
      filename: "bundle.js"
  },
  module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              plugins: ['transform-runtime'],
              presets: ['es2015', 'react', 'stage-2']
          }
      }, 
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.sass|\.scss/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[path]_[name]_[local]_[hash:base64:5]',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [__dirname],
              outputStyle: 'expanded'
            }
          }
        ],
      },]
  },
  devtool: 'inline-source-map',
};
