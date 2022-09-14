const { webpackConfig, merge } = require("@rails/webpacker");
const customConfig = {
  resolve: {
    extensions: [".css", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"]
        }
      }
    ]
  }
};

module.exports = merge(webpackConfig, customConfig);
