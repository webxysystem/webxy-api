import  express  from "express";
import { register, login, resetPassForEmail, validateToken, updatePassword } from "../services/auth"
import { generateJWT } from '../services/tokens';

import {validateLogin, validateRegister} from '../middlewares/authValidate'

let router = express.Router();

router.post('/login', validateLogin, async (req, res) => {
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

router.post('/register', validateRegister, async (req, res, next) => {
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


router.post('/reset-password', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    const message = "El email es necesario"
    return res.status(401).send(message);
  }
  const responseForEmail = await resetPassForEmail(email);
  res.send(responseForEmail);
})

router.post('/validate-token', async (req, res) => {
  const { email, token } = req.body;
  if (!email || !token) {
    const message = "El token es necesario"
    return res.status(401).send(message);
  }
  const valid = await validateToken(email,token);
  res.send(valid);
})

router.post('/update-password', async (req,res)=>{
  const { password, token } = req.body;
  if (!password || !token) {
    const message = "El password es necesario"
    return res.status(401).send(message);
  }
  const valid = await updatePassword(token,password);
  res.send(valid);
})


module.exports = router;
