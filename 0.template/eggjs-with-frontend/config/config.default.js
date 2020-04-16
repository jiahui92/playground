/* eslint valid-jsdoc: "off" */


/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1575539697776_6429';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // doc: https://github.com/eggjs/egg-static
  config.static = {
    dir: [
      { prefix: '/public', dir: 'app/public' },
      { prefix: '/assets', dir: 'dist/assets' }, // 前端打包资源:css/js
      { prefix: '/', dir: 'dist', maxAge: 0 }, // 前端打包资源:html
    ]
  };

  return {
    ...config,
    ...userConfig,
  };
};
