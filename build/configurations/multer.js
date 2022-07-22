"use strict";

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const storage = _multer.default.diskStorage({
  destination: function (req, file, cb) {
    cb(null, _path.default.join(__dirname, '../public/upload'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = new Date().getTime() + _path.default.extname(file.originalname);

    cb(null, uniqueSuffix);
  }
});

module.exports = (0, _multer.default)({
  storage
}).single('image');