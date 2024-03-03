const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/template/index.html" }),
    new MiniCssExtractPlugin({}),
  ],
};
