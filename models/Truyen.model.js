var db = require("./db");
var TruyenSchema = new db.mongoose.Schema(
  {
    name: { type: String, required: true },
    mota: { type: String, required: true },
    tacgia: { type: String, required: true },
    year :{type:Number ,require:true},
    img:{type:String,require:true},
    listImgs:[String],
  },
  { collection: "truyen" }
);
let TruyenModel = db.mongoose.model("truyenModel", TruyenSchema);

module.exports = {TruyenModel };