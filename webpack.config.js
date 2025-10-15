const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",  // вставляет стили в DOM
          "css-loader",    // позволяет импортировать CSS
          "sass-loader"    // компилирует SCSS → CSS
        ],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    static: "./dist",
    open: true,
    hot: true,
    port: 3000,
  },
  mode: "development"
};
