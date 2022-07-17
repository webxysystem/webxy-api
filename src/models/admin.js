import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
	name: String,
  userName: String,
  email: String,
  password: String,
  birthDate: Date,
  numberPhone: String, 
  roles: number
})
module.exports = mongoose.model('Admin', admin);