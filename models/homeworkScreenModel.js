const mongoose = require("mongoose");
const homeworkScreenModel = mongoose.Schema({
  stage: [String],
  theClass: [String],
  subject: [String],
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: "userNameAndPaswwordModel",
  },
});
module.exports=mongoose.model("homeworkScreenModel", homeworkScreenModel);
