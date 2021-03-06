import User from '../models/user'
import resetPassSchema from '../models/resetPass'

import bcrypt from "bcryptjs"
import { getUserForEmail } from './users'

import { sendEmail } from './email'
import {generateToken} from './tokens'

const register = async (user, type) => {
  user.type = getType(type);
  let error = null;
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

const resetPassForEmail = async (email) => {
  let error = null;
  let code = null;
  const userInDataBase = await getUserForEmail(email);
  if (!userInDataBase) {
    return  error = {
      error: '401',
      message: 'este usuario no esta registrado'
    }
  } else {
   code = generateCodeResetPass(userInDataBase.email)
  } 
  return error ? error : code;
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

const validateToken = async (email, token) =>{
  let error = null;
const isResetExist = await resetPassSchema.findOne({email});
if(!isResetExist){
  return error = {
      error: '401',
      message: 'no existe un user asociado'
    }
}else{
  if(isResetExist.token !== token){
    return error = {
      error: '401',
      message: 'este token no es correcto'
    }
  }else{
    return true;
  }
}
}

const updatePassword  = async (token, password) =>{
  let error = null;
  const isResetExist = await resetPassSchema.findOne({token});
  if(!isResetExist){
        return error = {
        error: '401',
        message: 'este token no es correcto'
      }
  }else{
    const newPassword = await encryptPass({password})
    const update = await User.findOneAndUpdate({email:isResetExist.email}, {password: newPassword.password }) 
    await resetPassSchema.findByIdAndRemove(isResetExist._id)
    return update;
  }
}

const generateCodeResetPass = async (email) => {
  let token = null;
  const isResetExist = await resetPassSchema.findOne({email});
  if(isResetExist){
    token = isResetExist.token;
  }else{
    token = generateToken(6);
    const tokenForChangePass = {
      email,
      token
    }
    await resetPassSchema.create(tokenForChangePass);
  }
  const to = email; 
  const subject= "Cambio de clave";
  const html = "<b>Este es tu codigo unico para cambiar tu contrase??a --> " + token + "</b>";
  await sendEmail(to, subject, html);
  return true;
}

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


module.exports = {register, login, resetPassForEmail, validateToken, updatePassword}