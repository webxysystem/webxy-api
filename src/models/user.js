import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: String,
  userName: String,
  email: String,
  password: String,
  birthDate: Date,
  numberPhone: String, 
  assistantId: String,
  type: Object
})
module.exports = mongoose.model('User', userSchema);