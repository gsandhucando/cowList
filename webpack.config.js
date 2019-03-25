module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    filename: "build.js",
    path: __dirname + "/build"
  },
  mode: "development",
  module: {
    rules: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }
    ]
  }
}