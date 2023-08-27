var db = require("./db");
var BinhLuanSchema = new db.mongoose.Schema(
  {
    id_user: {
        type: db.mongoose.Schema.Types.ObjectId,
        ref: "userModel",
        require: true,
      },
      id_truyen: {
        type: db.mongoose.Schema.Types.ObjectId,
        ref: "truyenModel",
        require: true,
      },
      noidung:{type:String,require:true},
      ngayGio :{type:String,require:true}
  },
  { collection: "binhluan" }
);
let BinhluanModel = db.mongoose.model("binhLuanModel", BinhLuanSchema);

module.exports = {BinhluanModel };