"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const transactionSchema = new _mongoose.default.Schema({
  userSellerId: String,
  userclientId: String,
  amount: Number,
  product: Object,
  type: Object
});
module.exports = _mongoose.default.model('Transaction', transactionSchema);