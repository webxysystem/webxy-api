"use strict";

var _randToken = _interopRequireDefault(require("rand-token"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SECRET = 'webxy';
const secret = process.env.TOKEN_KEY || SECRET;

const generateToken = numberOfCharacters => {
  return _randToken.default.generate(numberOfCharacters);
};

const generateJWT = user => {
  return _jsonwebtoken.default.sign({
    id: user._id
  }, secret, {
    expiresIn: 86400
  });
};

module.exports = {
  generateToken,
  generateJWT
};