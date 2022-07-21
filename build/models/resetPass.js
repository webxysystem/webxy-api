"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const resetPassSchema = new _mongoose.default.Schema({
  email: String,
  token: String
});
module.exports = _mongoose.default.model('ResetPass', resetPassSchema);