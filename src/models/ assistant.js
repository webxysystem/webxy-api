import mongoose from "mongoose";

const assistantSchema = new mongoose.Schema({
	name: String,
  userName: String,
  email: String,
  password: String,
  birthDate: Date,
  numberPhone: String, 
})
module.exports = mongoose.model('Assistant', assistant);