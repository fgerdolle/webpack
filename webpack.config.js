const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },
  plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'Output Management',
        }),
       ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
        rules: [
                {
                  test: /\.css$/,
                    use: [
                      'style-loader',
                      'css-loader',
                    ],
                },
                {
                  test: /\.(png|svg|jpg|gif)$/,
                  use: [
                    'file-loader',
                  ],
                },
                {
                  test: /\.s[ac]ss$/i,
                  use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                  ],
                },
              ],
            },
};
