import express from "express";
import { getPublications, createPublication, modifyPublication, transferPublication, detelePublication, like, dislike } from '../services/publication'
import auth from "../middlewares/validateToken";
import validateSchema from '../middlewares/validatorSchema'
import {publicationAddSchema, publicationEditSchema, publicationTransferSchema} from '../schemas/publication'

let router = express.Router();

router.get('/', auth, async (req, res) => {
  let { page, limit } = req.query;
  page ? page : page = 0;
  limit ? limit : limit = 10;
  const publications = await getPublications(page,limit)
  res.send(publications);
});

router.get('/my-publications', auth, async (req, res) => {
  let { page, limit } = req.query;
  page ? page : page = 0;
  limit ? limit : limit = 10;
  const filter = { userAuhthorId: req.userId };
  const publications = await getPublications(page,limit,filter)
  res.send(publications)
})

router.get('/my-gallery', auth, async (req, res) => {
  let { page, limit } = req.query;
  page ? page : page = 0;
  limit ? limit : limit = 10;
  const filter = { userOwnerId: req.userId };
  const publications = await getPublications(page,limit,filter)
  res.send(publications)
})

router.post('/add', auth, async (req, res, next) => {
  const publication = req.body;
  //validateSchema(publication, publicationAddSchema, res, next);
  publication.userAuhthorId = req.userId;
  publication.userOwnerId = req.userId;
  const savePublication = await createPublication(publication);
  res.send(savePublication);
})

router.put('like/:id', auth, async (req, res) => {
  const idPublication = req.params.id;
  const userId = req.userId;
  await like(idPublication, userId);
  return true;
})
router.put('dislike/:id', auth, async (req, res) => {
  const idPublication = req.params.id;
  const userId = req.userId;
  await dislike(idPublication, userId);
  return true;
})

router.put('/edit/:id', auth, async (req, res, next) => {
  const idPublication = req.params.id;
  const payload = req.body;
  //validateSchema(payload, publicationEditSchema, res, next);
  const updatePublication = await modifyPublication(idPublication, payload);
  res.send(updatePublication);
})

router.put('/transfer/:id', auth, async (req, res, next) => {
  const idPublication = req.params.id;
  const payload = req.body;
  //validateSchema(payload, publicationTransferSchema, res, next);
  const { idOldOwner, idNewOwner } = payload
  const update = await transferPublication( idPublication, idOldOwner, idNewOwner);
  res.send(update)
})

router.delete('/delete/:id', auth, async (req, res) => {
  const idPublication = req.params.id;
  const deletePublication = await detelePublication(idPublication);
  res.send(deletePublication)
})

module.exports = router;
