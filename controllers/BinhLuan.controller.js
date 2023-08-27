const { path } = require("../app");
const binhLuan = require("../models/Binhluan.model");
const User = require("../models/User.model");
exports.list = async (req,res,next)=>{
    try {
        return res.send(await binhLuan.BinhluanModel.find().populate("id_user","fullname").populate("id_truyen","name")) 
    } catch (error) {
        
    }
}
exports.listFortruyen = async(req,res,next)=>{
    
    try {
        const data = await binhLuan.BinhluanModel.find({id_truyen:req.query.id_truyen}).populate('id_user', 'username')
        .populate('id_truyen', 'name');
        
        if(data){
            return res.status(200).json(data)
        }
     //   return res.send(await binhLuan.BinhluanModel.find({id_truyen:req.query.id_truyen}));
    } catch (error) {
        
    }
}
exports.addBl = async (req,res,next)=>{
    try {
        const newBl = new binhLuan.BinhluanModel(req.body);
        let save = newBl.save();
        console.log(save);
        return res.status(200).json({ data: save });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ msg: error.message });
    }
}
exports.delete = async (req, res, next) => {
    let id = req.params.id;
    try {
      const deletetr = await binhLuan.BinhluanModel.findByIdAndDelete(id);
      if (!deletetr) {
        return res.status(404).send("Error");
      }
      res.status(200).json("thanh cong");
    } catch (error) {
      res.status(500).send(error);
    }
  };