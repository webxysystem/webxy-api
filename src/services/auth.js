import User from '../models/user'

import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { getUserForEmail } from './users'

const SECRET = 'webxy';
const secret = process.env.TOKEN_KEY || SECRET;

const getType = (type) => {
  let typeReturn = {
    type,
    name : ''
  }
  switch (type) {
    case 1:
      typeReturn.name = 'content manager'
      break;
    case 2:
      typeReturn.name = 'client'
      break;
    case 3:
      typeReturn.name = 'assistant'
      break;
    default:
      typeReturn.name = 'content manager'
      break;
  }
  return typeReturn;
}

const register = async (user, type) => {
  user.type = getType(type);
  const userInDataBase = await getUserForEmail(user.email);
  if (userInDataBase) {
    return  error = {
      error: '401',
      message: 'este usuario ya esta registrado'
    }
  } else {
    return await User.create( await encryptPass(user));
  }
}

const generateJWT = (user) => {
  return jwt.sign({ id: user._id }, secret, {
    expiresIn: 86400
  })  
}

const login = async (user) => {
  const { email, password } = user;
  let error = {};
  const userInDataBase = await getUserForEmail(email);
  if (!userInDataBase) {
    return  error = {
      error: '401',
      message: 'este usuario no se encuentra registrado'
    }
  } else {
    const validatePassword = compareEncryptPassword(password, userInDataBase.password)
    if (!validatePassword) {
      return  error = {
        error: '401',
        message: 'password incorrecto'
      }
    } else {
      return userInDataBase;
    }
  }
}



const encryptPass = async (user) => {
  const salt = await bcrypt.genSalt(10);
  const passEncript = await bcrypt.hash(user.password, salt);
  user.password = passEncript;
  return user;
}

const compareEncryptPassword = (userPass, encryptPass) => {
  return bcrypt.compareSync(userPass, encryptPass);
}



module.exports = {register, login, generateJWT}