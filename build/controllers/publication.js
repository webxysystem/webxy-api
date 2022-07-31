"use strict";

var _express = _interopRequireDefault(require("express"));

var _publication = require("../services/publication");

var _validateToken = _interopRequireDefault(require("../middlewares/validateToken"));

var _validatorSchema = _interopRequireDefault(require("../middlewares/validatorSchema"));

var _publication2 = require("../schemas/publication");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let router = _express.default.Router();

router.get('/', _validateToken.default, async (req, res) => {
  let {
    page,
    limit
  } = req.query;
  page ? page : page = 0;
  limit ? limit : limit = 10;
  const publications = await (0, _publication.getPublications)(page, limit);
  res.send(publications);
});
router.get('/my-publications', _validateToken.default, async (req, res) => {
  let {
    page,
    limit
  } = req.query;
  page ? page : page = 0;
  limit ? limit : limit = 10;
  const filter = {
    userAuhthorId: req.userId
  };
  const publications = await (0, _publication.getPublications)(page, limit, filter);
  res.send(publications);
});
router.get('/my-gallery', _validateToken.default, async (req, res) => {
  let {
    page,
    limit
  } = req.query;
  page ? page : page = 0;
  limit ? limit : limit = 10;
  const filter = {
    userOwnerId: req.userId
  };
  const publications = await (0, _publication.getPublications)(page, limit, filter);
  res.send(publications);
});
router.post('/add', _validateToken.default, async (req, res, next) => {
  const publication = req.body; //validateSchema(publication, publicationAddSchema, res, next);

  publication.userAuhthorId = req.userId;
  publication.userOwnerId = req.userId;
  const savePublication = await (0, _publication.createPublication)(publication);
  res.send(savePublication);
});
router.put('like/:id', _validateToken.default, async (req, res) => {
  const idPublication = req.params.id;
  const userId = req.userId;
  await (0, _publication.like)(idPublication, userId);
  return true;
});
router.put('dislike/:id', _validateToken.default, async (req, res) => {
  const idPublication = req.params.id;
  const userId = req.userId;
  await (0, _publication.dislike)(idPublication, userId);
  return true;
});
router.put('/edit/:id', _validateToken.default, async (req, res, next) => {
  const idPublication = req.params.id;
  const payload = req.body; //validateSchema(payload, publicationEditSchema, res, next);

  const updatePublication = await (0, _publication.modifyPublication)(idPublication, payload);
  res.send(updatePublication);
});
router.put('/transfer/:id', _validateToken.default, async (req, res, next) => {
  const idPublication = req.params.id;
  const payload = req.body; //validateSchema(payload, publicationTransferSchema, res, next);

  const {
    idOldOwner,
    idNewOwner
  } = payload;
  const update = await (0, _publication.transferPublication)(idPublication, idOldOwner, idNewOwner);
  res.send(update);
});
router.delete('/delete/:id', _validateToken.default, async (req, res) => {
  const idPublication = req.params.id;
  const deletePublication = await (0, _publication.detelePublication)(idPublication);
  res.send(deletePublication);
});
module.exports = router;