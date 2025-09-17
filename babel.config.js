// babel.config.js (root)
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // remove any reanimated/worklets plugins if you uninstalled them
    ],
  };
};
