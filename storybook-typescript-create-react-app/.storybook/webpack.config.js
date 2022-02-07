const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = async ({ config }) => {
  // const assetRule = config.module.rules.find(({ test }) => test.test(".svg"));

  // const assetLoader = {
  //   loader: assetRule.loader,
  //   options: assetRule.options || assetRule.query,
  // };

  // config.module.rules.unshift({
  //   test: /\.svg$/,
  //   use: ["@svgr/webpack", assetLoader],
  // });

  // config.module.rules.push({
  //   test: /\.mjs$/,
  //   include: /node_modules/,
  //   type: "javascript/auto",
  // });

  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../src/assets/fonts"),
          to: "fonts",
        },
        {
          from: path.resolve(__dirname, "../src/assets/favicons"),
          to: "favicons",
        },
        {
          from: path.resolve(__dirname, "../src/assets/logos"),
          to: "logos",
        },
      ],
    })
  );

  config.resolve.modules.push(process.cwd() + "/node_modules");
  config.resolve.modules.push(process.cwd() + "/src");

  config.resolve.symlinks = false;

  return config;
};
