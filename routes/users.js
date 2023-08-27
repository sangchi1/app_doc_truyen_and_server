var express = require('express');
var router = express.Router();
var UserControll = require("../controllers/User.controller");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get("/list", UserControll.getList);
router.post("/login",UserControll.login);
router.post("/add", UserControll.add);
router.put("/update/:id", UserControll.update);
router.delete("/delete/:id", UserControll.delete);
module.exports = router;
