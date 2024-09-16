const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../assets/src/js/app.js'),
  output: {
    path: path.resolve(__dirname, '../assets/dist/js'),
    filename: 'bundle.min.js'
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "../css/style.min.css"
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../assets/src/img'),
          to: path.resolve(__dirname, '../assets/dist/img'),
        },
      ],
    }),
  ],
  module: {
    rules: [
      // JAVASCRIPT
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // SASS
      {
        test: /\.(sa|sc|c)ss$/,
        use:
            [
              MiniCSSExtractPlugin.loader,
              {
                loader: "css-loader",
              },
              {
                loader: 'sass-loader',
              },
            ]
      },
      // FONTS
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: '../fonts/[name][ext]',
        },
      },
      // IMAGES
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: '../img/[name][ext]',
        },
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ],
  },
  mode: "production"
};