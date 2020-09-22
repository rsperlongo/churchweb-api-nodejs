const { authJwt } = require('../middlewares');
const controller = require('../controllers/user');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Content-Type', 'application/json',
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
      );
      next();
  });

  app.get('/api/test/all', controller.allAccess);

  app.get('/api/test/user', [authJwt.verifyToken], controller.userBoard);

  app.get('/api/test/mode', [authJwt.verifyToken, authJwt.isModerator],
  controller.moderatorBoard
  );

  app.get('/api/test/admin', [authJwt.verifyToken], controller.adminBoard);
};

