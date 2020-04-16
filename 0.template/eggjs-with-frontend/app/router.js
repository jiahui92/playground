'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.all('/logger/log', controller.logger.log);
  
  router.get('/doubanGroupFilter/getRecommendGroups', controller.doubanGroupFilter.getRecommendGroups);
};
