import  express  from "express";
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send("llegaste");
});

module.exports = router;
