"use strict";

var _express = _interopRequireDefault(require("express"));

var _files = require("../services/files");

var _users = require("../services/users");

var _validateToken = _interopRequireDefault(require("../middlewares/validateToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let router = _express.default.Router();
/**EXAMPLE use auht middleware  */


router.get("/welcome", _validateToken.default, async (req, res) => {
  const user = await (0, _users.getUser)(req.userId);
  console.log(user);
  res.status(200).send("Welcome 🙌 ");
});
/**EXAMPLE use auht middleware  */

/* GET home page. */

router.get('/', (req, res, next) => {
  res.send('Hola el path correcto es /api/v1');
});
router.post('/image', async (req, res) => {
  const file = req.file;
  const image = await (0, _files.saveImage)(file);
  res.send(image);
});
module.exports = router;