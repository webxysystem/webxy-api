import  express  from "express";
let router = express.Router();
import {registerAssistant, registerContentManager, registerClient} from "../services/auth"

router.post('/register', (req, res, next) => {
  const request = req.body;
  const type = request.type;
  switch (type) {
    case 1:
      registerContentManager(request.user);
      break;
    case 2:
      registerClient(request.user);
      break;
    case 3:
      registerAssistant(request.user);
      break;
  }
});


module.exports = router;
