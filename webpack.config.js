const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'development',
  devtool: 'eval-source-map',
  //entry: 'src/index.jsx'
  entry: path.resolve(__dirname, 'src', 'index.jsx'), //qual é o arquivo principal, inicial da aplicação
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: path.resolve(__dirname, 'public'), //onde fica o conteudo do arquivo html estatico da nossa aplicação
    },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module:{ //define o comportamento dos loaders para cada tipo de arquivo
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/, //node_modules já está pronto para o browser
        use: 'babel-loader'
      }
    ],
  }
};