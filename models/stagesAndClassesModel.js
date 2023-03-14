var mongoose = require("mongoose");
const objectId= mongoose.Types.ObjectId;
const groupAndStageModel = mongoose.Schema({
  theClass: {
    type: String,
    required: true,
  },
  stage:{
    type:String,
    required:true
  },
  subject:{
    type:String,
    requird:true
  },
  teacher:{
    type: objectId,
    required:true,
    ref:"userNameAndPaswwordModel"
  }
});
module.exports = mongoose.model("groupAndStageModel", groupAndStageModel);
