const UserModel = require("../models/User.model");
const bcrypt = require("bcrypt");
var socket = require("../socket_server");
exports.login = async(req,res,next)=>{
    try {
        const user = await UserModel.userModel.findByCredentials(req.body.username,req.body.password);
        if(!user){
          return res.status(401).json({ error: "Sai thông tin đăng nhập" });
        }
        return res.status(200).json({username: user.username,email:user.email,fullname:user.fullname,userId:user._id});
    } catch (error) {
      console.log(error)
      return res.status(400).json({ msg: error.message });
    }
  
}
exports.getList = async (req,res,next)=>{
    try {
            return res.send(await UserModel.userModel.find());
        } catch (error) {
            return res.status(500).json({ msg: error.message });
    }
}
exports.add = async (req, res, next) => {
    try {
      const salt = await bcrypt.genSalt(10);
      console.log(salt, req.body);
      const newUser = new UserModel.userModel(req.body);
      newUser.password = await bcrypt.hash(req.body.password, salt);
      let new_u = await newUser.save();
      console.log(new_u);
      socket.io.emit("new msg","Ban vua dang ky thanh cong");
      return res.status(500).json({ success:true,data: new_u });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
};
exports.update = async (req, res, next) => {
    let id = req.params.id;
    try {
      const update = await UserModel.userModel.findByIdAndUpdate(id, {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        fullname: req.body.fullname,
      });
      if (!update) {
        return res.status(404).send("Error");
      }
      res.status(400).json({ update: update });
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
};
exports.delete = async (req, res, next) => {
    let id = req.params.id;
    try {
      const deleteU = await UserModel.userModel.findByIdAndDelete(id);
      if (!deleteU) {
        return res.status(404).send("Error");
      }
      res.status(400).json("thanh cong");
    } catch (error) {
      res.status(500).send(error);
    }
};