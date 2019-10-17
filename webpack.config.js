const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ImageminPlugin = require("imagemin-webpack");
const imageminPngquant = require("imagemin-pngquant");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    './src/index.js',
    './src/scss/styles.scss'
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false,
            }
          },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              }
            }
          ]
        })
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader" // Or `url-loader` or your other loader
          },
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist/images*'), path.resolve(__dirname, 'dist/fonts*')],
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.pug"
    }),
    new ExtractTextPlugin({
      filename: './style.css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      { from: './src/images',
        to: path.resolve(__dirname, 'dist/images')}
    ]),
    new CopyWebpackPlugin([
      { from: './src/fonts',
        to: path.resolve(__dirname, 'dist/fonts')}
    ]),
    new CopyWebpackPlugin([
      { from: './node_modules/fluid-player/dist/images/',
        to: path.resolve(__dirname, 'dist/images')}
    ]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      bail: false, // Ignore errors on corrupted images
      cache: true,
      name: "images/[name].[ext]",
      imageminOptions: {
        plugins: [
          ["pngquant", {
            quality: [0.8, 0.9]
          }],
        ]
      },
      filter: (source, sourcePath) => {
        return source.byteLength < 8192;
      }
    })
  ],
};
