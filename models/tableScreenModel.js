const mongoose = require("mongoose");
const tableScreenModel = mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  subjectOfThisDay: [
    {
      nameOfSubject: String,
      clock: String,
      stage: String,
      class: String,
    },
  ],
  teacher:{
    type:mongoose.Types.ObjectId,
    ref:"userNameAndPaswwordModel"
  }
});
module.exports = mongoose.model("tableScreenModel", tableScreenModel);
