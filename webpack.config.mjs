import path, { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import CustomCleanPlugin from '@golden-tiger/custom-clean-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isDevelopment = process.env.NODE_ENV !== 'production';

console.log('isDevelopment', isDevelopment);

const config = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    // port: 8111,
  },
  entry: {
    index: {
      import: join(__dirname, 'src', 'index.tsx'),
      filename: 'dist/js/index.js',
    },
  },
  output: {
    path: join(__dirname),
    filename: 'dist/js/[name].[contenthash].js',
    chunkFilename: 'dist/js/[name].[contenthash].chunk.js',
    publicPath: isDevelopment ? '/' : '/test-webpack-react/',
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CustomCleanPlugin([
      join(__dirname, 'dist'),
      join(__dirname, 'index.html'),
      join(__dirname, '_redirects'),
    ]),
    new Dotenv({
      path: join(__dirname, '.env'),
      systemvars: true,
      safe: true,
    }),
    new HTMLWebpackPlugin({
      name: 'index.html',
      template: join(__dirname, '.', 'public', 'index.html'),
      chunks: ['index'],
      publicPath: isDevelopment ? '/' : '/test-webpack-react',
    }),
    new MiniCssExtractPlugin({
      filename: 'dist/css/[name].[contenthash].css',
    }),
    isDevelopment ? undefined : new CopyWebpackPlugin({
      patterns: [
        {
          from: join(__dirname, 'public', '_redirects'),
          to: '_redirects',
          toType: 'file',
        }
      ],
    }),
  ].filter(Boolean),
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 16000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        react: {
          chunks: 'all',
          name: 'react',
          filename: 'dist/js/[name].chunk.js',
          test: /[\\/]node_modules[\\/]react/,
          priority: 22,
          enforce: true,
          reuseExistingChunk: true,
        },
      },
    },
  },
};

export default config;