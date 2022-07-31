import  express  from "express";
import generalRouter from "./general"
import usersRouter from "./users"
import auhtRouter from "./auht"
import publicationRouter from "./publication"


function createRouter (app) {
  app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Headers', "X-Requested-With")
    next();
  });
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/', generalRouter);
  router.use('/users', usersRouter);
  router.use('/auht', auhtRouter);
  router.use('/publications', publicationRouter);
}


module.exports = createRouter;