import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userSellerId: String,
  userclientId: String,
  amount: Number,
  product: Object,
  type:Object
})
module.exports = mongoose.model('Transaction', transactionSchema);