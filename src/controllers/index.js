import  express  from "express";
import generalRouter from "./general"
import usersRouter from "./users"
import auhtRouter from "./auht"
import publicationRouter from "./publication"


function createRouter (app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/', generalRouter);
  router.use('/users', usersRouter);
  router.use('/auht', auhtRouter);
  router.use('/publications', publicationRouter);
}


module.exports = createRouter;