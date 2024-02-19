const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const prodConfigs = {
  name: "WebTVProdConfigs",
  mode: "production",
  devtool: false,
  target: ["web", "es5"],
};
const mergedConfigs = merge(common, prodConfigs);

module.exports = mergedConfigs;
