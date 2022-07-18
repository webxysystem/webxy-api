import express from "express";

import { getAllContentManager } from '../services/users'

let router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/managerContent', async (req, res) => {
  const users = await getUsers();
  res.send(users);
})



module.exports = router;
