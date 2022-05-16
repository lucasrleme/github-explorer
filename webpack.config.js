const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')


const isDevelopment = process.env.NODE_ENV !== 'production';
module.exports = {
  mode:isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  //entry: 'src/index.jsx'
  entry: path.resolve(__dirname, 'src', 'index.tsx'), //qual é o arquivo principal, inicial da aplicação
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', 'ts', '.tsx'],
  },
  devServer: {
    static: path.resolve(__dirname, 'public'), //onde fica o conteudo do arquivo html estatico da nossa aplicação
    hot:true
    },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),
  module:{ //define o comportamento dos loaders para cada tipo de arquivo
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/, //node_modules já está pronto para o browser
        use: {
          loader:'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/, //node_modules já está pronto para o browser
        use: [
          {loader:'style-loader'}, 
          {loader:'css-loader'}, 
          {loader:'sass-loader'}
        ],
      }
    ],
  }
};