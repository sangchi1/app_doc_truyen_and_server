var db = require("./db");
const bcrypt = require("bcrypt");
var userSchema = new db.mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    fullname: {type:String,require:true}
    ,
  },
  { collection: "user" }
);

userSchema.statics.findByCredentials = async (username, password) => {
  const user = await userModel.findOne({username });
  if (!user) {
    throw new Error({ error: "Không tồn tại user" });
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error({ error: "Sai password" });
  }
  return user;
};
let userModel = db.mongoose.model("userModel", userSchema);

module.exports = {userModel };