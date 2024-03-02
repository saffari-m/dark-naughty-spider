const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

const config = require("./webpack.config.js");

module.exports = {
  entry: {
    main: ["./src/polyfills.js", "./src/index.jsx"],
    // css: "./src/styles-entry.css",
  },

  output: {
    filename: "[name].WebTV.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    library: "WebTV",
    libraryTarget: "umd",
    libraryExport: "default",
    clean: true,
  },

  plugins: config.plugins,

  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@src": path.resolve(__dirname, "src"),
      "@public": path.resolve(__dirname, "public"),
    },
    extensions: [".jsx", ".js"],
  },

  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
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
            "@babel/preset-react",
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
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        // use: ["style-loader", "css-loader"],
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: { arrows: false },
          ecma: 5,
          module: true,
        },
      }),
    ],
    splitChunks: false,
    usedExports: false,
  },

  performance: {
    hints: false,
    maxEntrypointSize: 2000000,
    maxAssetSize: 2000000,
  },
};
