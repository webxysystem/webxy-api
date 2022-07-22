"use strict";

var _express = _interopRequireDefault(require("express"));

var _files = require("../services/files");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let router = _express.default.Router();
/* GET home page. */


router.get('/', (req, res, next) => {
  res.send("llegaste");
});
router.post('/image', async (req, res) => {
  const file = req.file;
  const image = await (0, _files.saveImage)(file);
  res.send(image);
});
module.exports = router;