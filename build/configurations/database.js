"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_DB
} = process.env; //local conection

const URI = 'mongodb://127.0.0.1:27017/webxy-develop';

_mongoose.default.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(db => console.log('conecto con mongo')).catch(err => console.log('error:', err));

module.exports = _mongoose.default; //mongo Atlas conection

/*
module.exports = {
'url': `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}`
}; */