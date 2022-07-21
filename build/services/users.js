"use strict";

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**EXAMPLE use auht middleware  */

/*import auth from "../middlewares/validateToken";

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});*/

/**EXAMPLE use auht middleware  */
const getUsers = async () => {
  return await _user.default.find();
};

const getUserForEmail = async email => {
  return await _user.default.findOne({
    email
  });
};

module.exports = {
  getUsers,
  getUserForEmail
};