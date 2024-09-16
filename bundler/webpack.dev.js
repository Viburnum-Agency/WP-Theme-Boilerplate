const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('./config.js')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = (env) => {

  return {
    entry: path.resolve(__dirname, '../assets/src/js/app.js'),
    output: {
      path: path.resolve(__dirname, '../assets/dist/js'),
      filename: 'bundle.min.js'
    },
    plugins: [
      new BrowserSyncPlugin({
        files: '**/*',
        host: '127.0.0.1',
        injectChanges: false,
        notify: false,
        open: 'external',
        port: 80,
        proxy: config.datas.localPath
      }),
      new MiniCSSExtractPlugin({
        filename: '../css/style.min.css'
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
                  options: {
                    sourceMap: env.sourcemaps ? true : false,
                  },
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: env.sourcemaps ? true : false,
                  },
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
    mode: 'development',
    devtool: env.sourcemaps ? 'source-map' : false
  };
};