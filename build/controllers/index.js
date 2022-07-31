"use strict";

var _express = _interopRequireDefault(require("express"));

var _general = _interopRequireDefault(require("./general"));

var _users = _interopRequireDefault(require("./users"));

var _auht = _interopRequireDefault(require("./auht"));

var _publication = _interopRequireDefault(require("./publication"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createRouter(app) {
  app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "X-Requested-With");
    next();
  });

  const router = _express.default.Router();

  app.use('/api/v1', router);
  router.use('/', _general.default);
  router.use('/users', _users.default);
  router.use('/auht', _auht.default);
  router.use('/publications', _publication.default);
}

module.exports = createRouter;