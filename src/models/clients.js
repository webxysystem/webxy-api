import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
	name: String,
  userName: String,
  email: String,
  password: String,
  birthDate: Date,
	numberPhone: String, 
})
module.exports = mongoose.model('Client', client);