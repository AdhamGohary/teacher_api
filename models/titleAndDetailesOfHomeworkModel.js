const mongoose = require("mongoose");
const titleAndDetailesOfHomeworkModel = mongoose.Schema({
  titleAndDetails: [
    {
      titleOfHomework: {
        type: String,
        required: true,
      },
      detailsOfHomework: {
        type: String,
        required: true,
      },
    },
  ],
});
module.exports = mongoose.model(
  "titleAndDetailesOfHomeworkModel",
  titleAndDetailesOfHomeworkModel
);
