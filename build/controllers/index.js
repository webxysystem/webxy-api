"use strict";

var _express = _interopRequireDefault(require("express"));

var _general = _interopRequireDefault(require("./general"));

var _users = _interopRequireDefault(require("./users"));

var _auht = _interopRequireDefault(require("./auht"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createRouter(app) {
  const router = _express.default.Router();

  app.use('/api/v1', router);
  router.use('/', _general.default);
  router.use('/users', _users.default);
  router.use('/auht', _auht.default);
}

module.exports = createRouter;