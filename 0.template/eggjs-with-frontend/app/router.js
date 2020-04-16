/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  console.log(controller.test.index);
  router.get('/api/test', controller.test.index);
  router.get('/api/some/test', controller.some.test.index);
};
