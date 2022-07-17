import mongoose from "mongoose";

const contentManagerSchema = new mongoose.Schema({
	name: String,
  userName: String,
  email: String,
  password: String,
  birthDate: Date,
  numberPhone: String, 
  assistantId: String
})
module.exports = mongoose.model('ContentManager', contentManager);