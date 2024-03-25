const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [
      new TerserPlugin(), // Минимизация JavaScript
      new OptimizeCSSAssetsPlugin(), // Минимизация CSS
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Транспиляция JavaScript
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Извлечение CSS в отдельный файл
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'], // Обработка изображений
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ // Плагин для извлечения CSS в отдельный файл
      filename: 'styles.css',
    }),
    new webpack.DefinePlugin({ // Определение переменных среды (например, NODE_ENV)
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};