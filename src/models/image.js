import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  public_id: String
})
module.exports = mongoose.model('Image', imageSchema);