
import * as createError from 'http-errors';
import  express  from "express";
import  path  from "path";
import cookieParser from 'cookie-parser';
import logger from 'morgan';


//conection mongodb
import mongoose from '../configurations/database';
import cors from '../configurations/cors'
import createRouter from "./controllers/index"

let app = express();

// view engine setup and send static files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//cors
app.use(cors);

//routes in app
createRouter(app)
  
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//ejecucion del servidor
app.set('port',process.env.PORT|| 3000)

const server = app.listen(app.get('port'),()=>{
  console.log('server on port ' +  app.get('port'))
}) 

module.exports = app;
