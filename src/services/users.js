import User from '../models/user'

const getUsers = async () => {
  return await User.find();
}

const getUser = async (id) => {
  return await User.findById(id);
}

const getUserForEmail = async (email) => {
  return await User.findOne({ email });
}

module.exports = {getUsers, getUser, getUserForEmail}