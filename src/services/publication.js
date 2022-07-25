import Publication from '../models/publication';

const createPublication = async (publication) => {
  return await Publication.create(publication);
}

const modifyPublication = async (idPublication, payload) => {
  const filter = { _id: idPublication };
  return await Publication.findOneAndUpdate(filter, payload, {new: true})
}

const getPublications = async (page, limit, filter) => {
  if (!filter){
    filter = {}
  }
  return await Publication.find(filter, null, { skip: page, limit });
}

const getPublicationById = async (id) => {
  return await Publication.findById(id);
}

const transferPublication = async (idPublication, idOldOwner, idNewOwner) => {
  const filter = {
    _id: idPublication,
    userOwnerId: idOldOwner
  }
  const payload = { userOwnerId: idNewOwner}
  return await Publication.findOneAndUpdate(filter, payload, {new: true})
}

const detelePublication = async (id) => {
  return await Publication.findOneAndDelete(id);
}

const like = async (idPublication, idUser) => { 
  const filter = { _id: idPublication };
  return Publication.findOneAndUpdate(filter, {likes: 50}, {new: true})
}
const dislike = async (idPublication, idUser) => { 
  const filter = { _id: idPublication };
  return Publication.findOneAndUpdate(filter, {likes: 49}, {new: true})
}

module.exports = {getPublications, createPublication, modifyPublication, transferPublication, detelePublication, like, dislike, getPublicationById}