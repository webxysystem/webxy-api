"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const publicationSchema = new _mongoose.default.Schema({
  title: String,
  description: String,
  likes: Number,
  userAuhthorId: String,
  userOwnerId: String,
  images: Array,
  isPublic: Boolean
});
module.exports = _mongoose.default.model('Publication', publicationSchema);