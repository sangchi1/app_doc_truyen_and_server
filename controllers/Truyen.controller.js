const truyenModel = require("../models/Truyen.model");

exports.list = async (req,res,next)=>{
    try {
        return res.send(await truyenModel.TruyenModel.find());
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}
exports.getListName = async (req, res, next) => {
    try {
     return res.send(
        await truyenModel.TruyenModel.find({name:req.query.name})
      );
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  };
exports.listChiTiet = async(req,res,next)=>{
    let id = req.params.id ;
    try {
      return res.send(await truyenModel.TruyenModel.findById(id))
      
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }
  exports.read =async(req,res,next)=>{
    let id = req.params.id ;
    try {
      const list = await truyenModel.TruyenModel.findById(id);
      let read = list.listImgs;
      if(read){
        return res.status(200).json({data:read});
      }
      
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }

exports.AddImg = async (req,res,next)=>{
    let id = req.params.id ;
    try {
   await truyenModel.TruyenModel.findOneAndUpdate({
            id : id
        },{
             $addToSet:{
                listImgs : req.body.listImgs ,
            }
        });
      
    } catch (error) {
        console.log(error)
    }
}
exports.addTruyen = async(req,res,next)=>{
    try {
        const newTruyen = new truyenModel.TruyenModel(req.body);
        let save = await newTruyen.save();
        console.log(save);
     
        return res.status(500).json({ data: save });
    } catch (error) {
        console.log(error);
      return res.status(400).json({ msg: error.message });
    }
}
exports.update = async (req,res,next)=>{
    let id = req.params.id;
    try {
        const update = await truyenModel.TruyenModel.findByIdAndUpdate(id, {
            name: req.body.name,
            mota: req.body.mota,
            tacgia: req.body.tacgia,
            year:req.body.year,
            img: req.body.img,
            listImgs : req.body.listImgs
          });
          if (!update) {
            return res.status(404).send("Error");
          }
          res.status(400).json({ update: update });
    } catch (error) {
        
    }
}
exports.delete = async (req, res, next) => {
    let id = req.params.id;
    try {
      const deletetr = await truyenModel.TruyenModel.findByIdAndDelete(id);
      if (!deletetr) {
        return res.status(404).send("Error");
      }
      res.status(400).json("thanh cong");
    } catch (error) {
      res.status(500).send(error);
    }
  };