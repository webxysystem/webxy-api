"use strict";

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getUsers = async () => {
  return await _user.default.find();
};

const getUser = async id => {
  return await _user.default.findById(id);
};

const getUserForEmail = async email => {
  return await _user.default.findOne({
    email
  });
};

module.exports = {
  getUsers,
  getUser,
  getUserForEmail
};