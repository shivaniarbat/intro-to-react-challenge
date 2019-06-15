module.exports = {
  entry: "./dev/js/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: __dirname + "/src/js",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
    contentBase: "./src",
    port: 4000
  }
};
