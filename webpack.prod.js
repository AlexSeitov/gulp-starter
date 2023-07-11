import TerserPlugin from 'terser-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default {
  mode: 'production',
  entry: {
    main: './src/scripts/index.js'
    // second_page: './src/scripts/second_page.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  optimization: {
    minimize: true,
    usedExports: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          },
          format: {
            comments: false
          }
        },
        extractComments: false
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
  // plugins: [new BundleAnalyzerPlugin()]
};
