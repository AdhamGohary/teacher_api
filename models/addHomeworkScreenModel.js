var mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;

const addHomeworkModel = mongoose.Schema({
  stage: {
    type: String,
    required: true,
  },
  theClass: {
    type: String,
    required: true,
  },

  subject: {
    type: String,
    requird: true,
  },
  titleAndDetailesOfHomework: {
    type: mongoose.Types.ObjectId,
    ref: "titleAndDetailesOfHomeworkModel",
  },
  teacher: {
    type: objectId,
    required: true,
    ref: "userNameAndPaswwordModel",
  },
});
module.exports = mongoose.model("addHomeworkModel", addHomeworkModel);
