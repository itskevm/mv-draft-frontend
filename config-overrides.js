const { override, useBabelRc, getBabelLoader } = require('customize-cra');

const removeBultinBabelConfig = config => {
  getBabelLoader(config).options.presets = [];
  getBabelLoader(config).options.plugins = [];
  return config;
}

module.exports = override(removeBultinBabelConfig, useBabelRc());