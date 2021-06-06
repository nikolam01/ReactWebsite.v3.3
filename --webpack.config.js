const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
};
