"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const adminSchema = new _mongoose.default.Schema({
  name: String,
  userName: String,
  email: String,
  password: String,
  birthDate: Date,
  numberPhone: String,
  roles: number
});
module.exports = _mongoose.default.model('Admin', adminSchema);