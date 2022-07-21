"use strict";

var _express = _interopRequireDefault(require("express"));

var _auth = require("../services/auth");

var _tokens = require("../services/tokens");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let router = _express.default.Router();

router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});
router.post('/login', async (req, res) => {
  const credentials = req.body;
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
  const request = req.body;
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
  const responseForEmail = await (0, _auth.resetPassForEmail)(email);
  res.send(responseForEmail);
});
router.post('/validate-token', async (req, res) => {
  const {
    email,
    token
  } = req.body;
  const valid = await (0, _auth.validateToken)(email, token);
  res.send(valid);
});
router.post('/update-password', async (req, res) => {
  const {
    password,
    token
  } = req.body;
  const valid = await (0, _auth.updatePassword)(token, password);
  res.send(valid);
});
module.exports = router;