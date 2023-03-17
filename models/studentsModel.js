const mongoose = require("mongoose");
const studentsModel = mongoose.Schema({
  img: String,
  name: String,
  parentTelephoneNumber: String,
  theClass:{
    type:mongoose.Types.ObjectId,
    ref:"groupAndStageModel"
  }
});
module.exports = mongoose.model("studentsModel", studentsModel);
