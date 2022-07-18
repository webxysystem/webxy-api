import  express  from "express";
import {register, login , generateJWT} from "../services/auth"

let router = express.Router();

router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/login', async (req, res) => {
  const credentials = req.body;
  const userValidate = await login(credentials);
  let error = null
  let response = null;
  if (userValidate.error) {
    error = userValidate;
  } else {
    const token = generateJWT(userValidate);
    response = {
        auht: true,
        token: token,
        user: userValidate
    }
  }
  res.send(error ? error : response);
})

router.post('/register', async (req, res, next) => {
  const request = req.body;
  const type = request.type;
  let userCreated = await register(request.user, type)

  const token = generateJWT(userCreated);
  const response = {
    auht: true,
    token: token,
    user: userCreated
  }
  res.send(response);
});


module.exports = router;
