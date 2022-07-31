"use strict";

var _express = _interopRequireDefault(require("express"));

var _auth = require("../services/auth");

var _tokens = require("../services/tokens");

var _auth2 = require("../schemas/auth");

var _validatorSchema = _interopRequireDefault(require("../middlewares/validatorSchema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let router = _express.default.Router();

router.post('/login', async (req, res, next) => {
  const credentials = req.body; //validateSchema(credentials, userLoginSchema, res, next);

  const userValidate = await (0, _auth.login)(credentials);
  let error = null;
  let response = null;

  if (userValidate.error) {
    error = userValidate;
  } else {
    const token = (0, _tokens.generateJWT)(userValidate);
    response = {
      auht: true,
      token: token,
      user: userValidate
    };
  }

  res.send(error ? error : response);
});
router.post('/register', async (req, res, next) => {
  const request = req.body; //validateSchema(request, userRegisterSchema, res, next);

  const type = request.type;
  let userCreated = await (0, _auth.register)(request.user, type);
  const token = (0, _tokens.generateJWT)(userCreated);
  const response = {
    auht: true,
    token: token,
    user: userCreated
  };
  res.send(response);
});
router.post('/reset-password', async (req, res) => {
  const {
    email
  } = req.body;

  if (!email) {
    const message = "El email es necesario";
    return res.status(401).send(message);
  }

  const responseForEmail = await (0, _auth.resetPassForEmail)(email);
  res.send(responseForEmail);
});
router.post('/validate-token', async (req, res) => {
  const {
    email,
    token
  } = req.body;

  if (!email || !token) {
    const message = "El token es necesario";
    return res.status(401).send(message);
  }

  const valid = await (0, _auth.validateToken)(email, token);
  res.send(valid);
});
router.post('/update-password', async (req, res) => {
  const {
    password,
    token
  } = req.body;

  if (!password || !token) {
    const message = "El password es necesario";
    return res.status(401).send(message);
  }

  const valid = await (0, _auth.updatePassword)(token, password);
  res.send(valid);
});
module.exports = router;