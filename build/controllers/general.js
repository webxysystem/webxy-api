"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let router = _express.default.Router();
/* GET home page. */


router.get('/', (req, res, next) => {
  res.send("llegaste");
});
module.exports = router;