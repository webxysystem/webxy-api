import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema({
  title: String,
  description: String,
  likes: Number,
  userAuhthorId: String,
  userOwnerId: String,
  images: Array,
  isPublic: Boolean
})
module.exports = mongoose.model('Publication', publicationSchema);