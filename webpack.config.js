const path = require('path');
const { HotModuleReplacementPlugin, ProvidePlugin } = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

function getPublicPath() {
  return !isDevelopment ? 'https://qcloud-apaas.github.io/mobile-ui/demos/' : '/demos/';
}

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  target: 'web',
  entry: {
    app: './src/demos/scripts/main.ts',
  },
  output: {
    publicPath: getPublicPath(),
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'docs/demos'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    contentBase: path.join(__dirname, 'docs'),
    hot: true,
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/demos/index.ejs',
      minify: true,
    }),
    new ProvidePlugin({
      React: 'react',
    }),
    isDevelopment && new HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};
