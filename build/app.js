"use strict";

var _express = _interopRequireDefault(require("express"));

var _error = require("./middlewares/error.handler");

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _database = _interopRequireDefault(require("./configurations/database"));

var _cors = _interopRequireDefault(require("./configurations/cors"));

var _index = _interopRequireDefault(require("./controllers/index"));

var _multer = _interopRequireDefault(require("./configurations/multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import cors from 'cors'
const app = (0, _express.default)();
app.use((0, _cors.default)()); // view engine setup and send static files

app.set('views', _path.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(_express.default.static(_path.default.join(__dirname, 'public')));
app.use((0, _morgan.default)('dev'));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _cookieParser.default)());
app.set('port', process.env.PORT || 3001);
app.use(_express.default.json());
app.get('/', (req, res) => {
  res.send('Hola el path correcto es /api/v1');
});
app.use(_multer.default); //create router

(0, _index.default)(app);
app.use(_error.logErrors);
app.use(_error.boomErrorHandler);
app.use(_error.errorHandler);
const server = app.listen(app.get('port'), () => {
  console.log('server on port ' + app.get('port'));
});
module.exports = app;