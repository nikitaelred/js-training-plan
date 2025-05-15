const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    SharePlace: "./src/SharePlace.js",
    MyPlace: "./src/MyPlace.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist", "assets", "scripts"),
    publicPath: "/assets/scripts/",
    clean: true, // replaces CleanWebpackPlugin for Webpack 5
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                { useBuiltIns: "usage", corejs: { version: 3 } },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "dist", "index.html"),
      //template: './src/index.html',
      chunks: ["SharePlace", "MyPlace"],
    }),
  ],
};
