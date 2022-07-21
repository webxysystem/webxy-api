"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userSchema = new _mongoose.default.Schema({
  name: String,
  userName: String,
  email: String,
  password: String,
  birthDate: Date,
  numberPhone: String,
  assistantId: String,
  type: Object
});
module.exports = _mongoose.default.model('User', userSchema);