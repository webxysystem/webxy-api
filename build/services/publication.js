"use strict";

var _publication = _interopRequireDefault(require("../models/publication"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createPublication = async publication => {
  return await _publication.default.create(publication);
};

const modifyPublication = async (idPublication, payload) => {
  const filter = {
    _id: idPublication
  };
  return await _publication.default.findOneAndUpdate(filter, payload, {
    new: true
  });
};

const getPublications = async (page, limit, filter) => {
  if (!filter) {
    filter = {};
  }

  return await _publication.default.find(filter, null, {
    skip: page,
    limit
  });
};

const getPublicationById = async id => {
  return await _publication.default.findById(id);
};

const transferPublication = async (idPublication, idOldOwner, idNewOwner) => {
  const filter = {
    _id: idPublication,
    userOwnerId: idOldOwner
  };
  const payload = {
    userOwnerId: idNewOwner
  };
  return await _publication.default.findOneAndUpdate(filter, payload, {
    new: true
  });
};

const detelePublication = async id => {
  return await _publication.default.findOneAndDelete(id);
};

const like = async (idPublication, idUser) => {
  const filter = {
    _id: idPublication
  };
  return _publication.default.findOneAndUpdate(filter, {
    likes: 50
  }, {
    new: true
  });
};

const dislike = async (idPublication, idUser) => {
  const filter = {
    _id: idPublication
  };
  return _publication.default.findOneAndUpdate(filter, {
    likes: 49
  }, {
    new: true
  });
};

module.exports = {
  getPublications,
  createPublication,
  modifyPublication,
  transferPublication,
  detelePublication,
  like,
  dislike,
  getPublicationById
};