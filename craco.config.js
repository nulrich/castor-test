module.exports = {
  webpack: {
    configure: function (webpackConfig) {
      webpackConfig.module.rules[1].oneOf[4].resolve = {
        fullySpecified: false,
      };
      return webpackConfig;
    },
  },
};
