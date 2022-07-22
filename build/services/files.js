"use strict";

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _image = _interopRequireDefault(require("../models/image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_cloudinary.default.config({
  cloud_name: 'webxy',
  api_key: '867962946351458',
  api_secret: 'VfPdYSzRi3XqwA1SnKnxnAP9Wzc'
});

const uploadImage = async path => {
  return await _cloudinary.default.v2.uploader.upload(path);
};

const removeFile = async path => {
  return await _fsExtra.default.unlink(path);
};

const saveImage = async image => {
  const upload = await uploadImage(image.path);
  const imageCloud = {
    title: image.filename,
    imageUrl: upload.secure_url,
    public_id: upload.public_id
  };
  await removeFile(image.path);
  return await _image.default.create(imageCloud);
};

module.exports = {
  saveImage
};