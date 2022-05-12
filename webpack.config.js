const path = require('path')

module.exports = {
  mode:'development',
  //entry: 'src/index.jsx'
  entry: path.resolve(__dirname, 'src', 'index.jsx'), //qual é o arquivo principal, inicial da aplicação
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
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