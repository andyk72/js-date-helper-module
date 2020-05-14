const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'date-helper.js',
    path: path.resolve(__dirname, 'build'),
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};