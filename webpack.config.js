module.exports = {
  mode: "development",
  entry: "./js/index.js",
  target: ["web", "es5"],
  devServer: {
    static: "dist",
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
};
