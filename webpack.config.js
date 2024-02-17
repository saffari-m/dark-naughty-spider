const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfigs = {
  entry: "./src/index.jsx",

  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".jsx", ".js"],
  },

  target: ["web", "es5"],
  module: {
    strictExportPresence: true,

    rules: [
      {
        test: /\.(js|jsx)$/,
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
                targets: ">0.1%",
              },
            ],
            "solid",
          ],
          plugins: ["@babel/plugin-transform-arrow-functions"],
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

  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({
  //       terserOptions: {
  //         compress: { arrows: false },
  //         ecma: 5,
  //         module: true,
  //       },
  //     }),
  //   ],
  //   splitChunks: false,
  //   usedExports: false,
  // },
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
    globalObject: "this",
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
