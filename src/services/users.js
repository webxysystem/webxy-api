import User from '../models/user'

/**EXAMPLE use auht middleware  */
/*import auth from "../middlewares/validateToken";

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});*/
/**EXAMPLE use auht middleware  */

const getUsers = async () => {
  return await User.find();
}

const getUserForEmail = async (email) => {
  return await User.findOne({ email });
}

module.exports = {getUsers, getUserForEmail}