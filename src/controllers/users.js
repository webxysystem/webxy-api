import express from "express";
import { getUsers } from '../services/users'

let router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/users', async (req, res) => {
  const users = await getUsers();
  res.send(users);
})



module.exports = router;
