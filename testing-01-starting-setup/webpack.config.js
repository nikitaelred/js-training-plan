const path = require('path');

module.exports = {
  entry: './app.js', // Adjust if your real entry is different
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};