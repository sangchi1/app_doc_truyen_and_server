var express = require('express');
var router = express.Router();
var TruyenCOntroll = require("../controllers/Truyen.controller");
/* GET users listing. */

router.get("/list", TruyenCOntroll.list);
router.get("/listChiTiet/:id", TruyenCOntroll.listChiTiet);
router.get("/read/:id",TruyenCOntroll.read);
router.get("/listName",TruyenCOntroll.getListName);
router.post("/add",TruyenCOntroll.addTruyen);
router.put("/addListImg/:id", TruyenCOntroll.AddImg);
router.put("/update/:id",TruyenCOntroll.update);
router.delete("/delete/:id",TruyenCOntroll.delete);
module.exports = router;