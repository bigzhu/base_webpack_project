module.exports = {
  entry: ['./main.coffee'],
  output: {
    path: "./build",
    filename: "build.js"
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee" },
      { test: /\.less$/, loader: "less" },
      { test: /\.html$/, loader: "html" }
    ]
  }
}
