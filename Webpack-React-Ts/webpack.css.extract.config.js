// Compatible with webpack 5
const HtmlWebPackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path')
const devMode = process.env.NODE_ENV !== 'production';

const cssLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 1,
  },
};

module.exports = (env, argv) => {
  return {
    mode: argv.mode || 'development',
    entry: {
      main: './src/Index.tsx',
    },
    output: {
      filename: '[name]-react.js',
      path: path.join(__dirname, '/dist')
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
      inline: true,
      contentBase: './public',
      historyApiFallback: true,
      port: 3002
    },
    devtool: false,
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          // sourceMap: true, // Must be set to true if using source-maps in production - this no longer exists in the new one.
          exclude: /\.(min)\.(js)$/i,
          terserOptions: {
            // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
            // using default options
          }
        }),
        // This will CSS optimization only in productio nmode. For it fto work in development mode, we need to set minimize option to true
        new CssMinimizerPlugin(), 
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: 'index.html'
      }),
      new MiniCssExtractPlugin(), 
    ],
    module: {
      rules: [
        {
          test: /\.[tj]sx?$/,
          exclude: /node_modules/,
          use: [
            { loader: 'ts-loader'}
          ]
        },
        // Do not use `style-loader` and `mini-css-extract-plugin`
        {
          test: /(src).+\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-modules-typescript-loader',
            {
              ...cssLoader,
              options: {
                modules: true,
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /img.+\.svg$/,
          use: ['svg-inline-loader?classPrefix'],
        },
        {
          test: /fonts.+\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          }],
        },
      ]
    }
  }
}
