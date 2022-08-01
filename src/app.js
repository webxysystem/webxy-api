import  express  from "express";
import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler';
import  path  from "path";
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import mongoose from './configurations/database';
import cors from './configurations/cors'
import createRouter from "./controllers/index"
import multer from "./configurations/multer"

const app = express();
app.use(cors());

// view engine setup and send static files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.set('port',process.env.PORT|| 3001)

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hola el path correcto es /api/v1');
});
app.use(multer);


//create router
createRouter(app);


app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

const server = app.listen(app.get('port'),()=>{
  console.log('server on port ' +  app.get('port'))
}) 

module.exports = app;
