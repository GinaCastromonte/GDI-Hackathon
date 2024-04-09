const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./public",
    proxy: {
      "/api": process.env.FRONTEND_URL,
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/index.html",
    }),
    new DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),

      "process.env.FRONTEND_URL": JSON.stringify(process.env.FRONTEND_URL),
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
