var mongoose = require("mongoose");
const userNameAndPaswwordModel = mongoose.Schema({
  userName: {
    type: String,
    required: true, 
    unique:true,
  },
  password: {
    type: String,
    required: true,
  },
  
 
},
{
  timestamps:true,
});
module.exports = mongoose.model(
  "userNameAndPaswwordModel",
  userNameAndPaswwordModel
);
