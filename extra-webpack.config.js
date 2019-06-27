const HtmlWebpackPlugin = require('html-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
// const { AngularCompilerPlugin } = require('@ngtools/webpack');
const autoprefixer = require('autoprefixer');
/**
 * This is where you define your additional webpack configuration items to be appended to
 * the end of the webpack config.
 */
module.exports = {
  module : {
    rules: [
      {
        test: /\.css$/,
        use : [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use : [
          {
            loader : 'less-loader',
            options: {
              modifyVars       : {
                'primary-color'     : 'red',
                'link-color'        : '#1DA57A',
                'border-radius-base': '2px',
              },
              javascriptEnabled: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'footer.html',
      template: 'src/footer-template.html'
    })
  ]
};
