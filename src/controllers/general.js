import express from "express";
import { saveImage } from '../services/files';
import { getUser } from '../services/users'
let router = express.Router();

/**EXAMPLE use auht middleware  */
import auth from "../middlewares/validateToken";

router.get("/welcome", auth, async(req, res) => {
  const user = await getUser(req.userId);
  console.log(user);
  res.status(200).send("Welcome 🙌 ");
});
/**EXAMPLE use auht middleware  */


/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('Hola el path correcto es /api/v1');
});

router.post('/image', async (req, res) => {
  const file = req.file;
  const image = await saveImage(file);
  res.send(image);
})

module.exports = router;
