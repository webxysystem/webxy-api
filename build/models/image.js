"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const imageSchema = new _mongoose.default.Schema({
  title: String,
  imageUrl: String,
  public_id: String,
  exclusiveContent: Boolean
});
module.exports = _mongoose.default.model('Image', imageSchema);