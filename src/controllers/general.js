import express from "express";
import { saveImage } from '../services/files';

let router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) => {
  res.send("llegaste");
});

router.post('/image', async (req, res) => {
  const file = req.file;
  const image = await saveImage(file);
  res.send(image);
})

module.exports = router;
