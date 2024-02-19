const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const devConfigs = {
  name: "WebTVDevConfigs",
  mode: "development",

  devtool: "inline-source-map",
  devServer: {
    open: false,
    allowedHosts: "all",
    port: 4400,
    historyApiFallback: true,
    hot: true,
  },
};
const mergedConfigs = merge(common, devConfigs);

module.exports = mergedConfigs;
