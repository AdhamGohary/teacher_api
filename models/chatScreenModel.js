const mongoose = require("mongoose");
const chatScreenModel = mongoose.Schema({
  chats: [
    {
      nameOfStudent: {
        type: String,
        required: true,
      },
      photoOfStudent: {
        type: String,
        required: true,
      },
      contentOfChat: {
        type: String,
        required: true,
      },
    },
  ],
  teacher:{
    type:mongoose.Types.ObjectId,
    ref:"userNameAndPaswwordModel"
  }
});
module.exports = mongoose.model("chatScreenModel", chatScreenModel);
