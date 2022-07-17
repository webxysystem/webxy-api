import  express  from "express";
import generalRouter from "./general"
import usersRouter from "./users"

function createRouter(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/', generalRouter);
  router.use('/users', usersRouter);

}

module.exports = createRouter;