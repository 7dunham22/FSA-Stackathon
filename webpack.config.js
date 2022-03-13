module.exports = {
  entry: ['./pages/index.js'],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  devtool: 'source-map',
  mode: 'development',
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      url: require.resolve('url/'),
      assert: require.resolve('assert/'),
      crypto: require.resolve('crypto-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react',
            {
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-transform-runtime',
              ],
            },
          ],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
