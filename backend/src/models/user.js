const { default: mongoose } = require("mongoose");
const monggose=require("mongoose");

const userSchema=mongoose.Schema({
      firstName:{type: String, required: true},
      lastName:{type: String, required: true},
      email:{type:String, required: true},
      age:{type: Number, required: true},
      password:{type: String, required: true},
      gender:{type: String, required: true},
})

const UserModel=mongoose.model("User",userSchema);

module.exports=UserModel;