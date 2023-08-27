var express = require('express');
var router = express.Router();
var binhLuan = require("../controllers/BinhLuan.controller");
/* GET users listing. */

router.get("/list",binhLuan.list,);
router.get("/listForTruyen",binhLuan.listFortruyen);
router.post("/add",binhLuan.addBl);
router.delete("/delete/:id",binhLuan.delete);
module.exports = router;
