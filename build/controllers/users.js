"use strict";

var _express = _interopRequireDefault(require("express"));

var _users = require("../services/users");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let router = _express.default.Router();
/* GET users listing. */


router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});
router.get('/managerContent', async (req, res) => {
  const users = await getUsers();
  res.send(users);
});
module.exports = router;