const path = require('path');

module.exports = {
  entry: './src/code.ts', //entry point will otherwise default to './src/index'
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js', '.tsx' ]
  },
  output: {   //otherwise defaults to './dist/main.js'
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};