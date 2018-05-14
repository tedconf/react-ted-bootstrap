const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  plugins: [],
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
    'react-router-dom': 'commonjs react-router-dom',
    glamorous: 'commonjs glamorous',
    glamor: 'commonjs glamor',
  },
};
