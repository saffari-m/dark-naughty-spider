const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfigs = {
  mode: "development",
  entry: "./src/index.jsx",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 5,
          module: true,
        },
      }),
    ],
    splitChunks: false,
    usedExports: false,
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".jsx", ".js"],
  },
  performance: {
    maxEntrypointSize: 2000000, // 2MB
    maxAssetSize: 2000000, // 2MB
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js)x$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
        options: {
          babelrc: false,
          presets: [
            [
              "@babel/preset-env",
              {
                loose: true,
                modules: false,
                targets: {
                  chrome: "32",
                  firefox: "40",
                  edge: "16",
                  // browsers: [
                  //   "chrome >= 32",
                  //   "firefox >= 32",
                  //   "safari >= 8",
                  //   "ios >= 8",
                  //   "android >= 4",
                  // ],
                },
              },
            ],
            "solid",
          ],
          plugins: [],
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

const devConfig = {
  name: "devConfig",
  mode: "development",

  output: {
    filename: "SolidJsPractice.js",
    chunkFilename: "SolidJsPractice.[contenthash].js",
    sourceMapFilename: "SolidJsPractice.[contenthash].js.map",
    path: path.resolve(__dirname, "dist"),
    library: "SolidJsPractice",
    libraryTarget: "umd",
    libraryExport: "default",
    clean: true,
    globalObject: "this", // https://github.com/webpack/webpack/issues/6642#issuecomment-370222543
  },
  devtool: "source-map",
  devServer: {
    open: false,
    allowedHosts: "all",
    port: 4400,
    historyApiFallback: true,
  },
};

const mergedConfig = merge(commonConfigs, devConfig);
module.exports = mergedConfig;
