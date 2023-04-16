const ChatScreenModel = require("../models/chatScreenModel");
///////////////////////////////////////
const add = async (req, res) => {
  const { chats, teacher } = req.body;
  const chatScreen = await new ChatScreenModel({
    chats: chats,
    teacher: teacher,
  })
    .save()
    .catch((err) => console.log("ERROR IS" + err));
  if (chatScreen) {
    res.json(chatScreen);
  }
};
//////////////////////////////////////
const getAll = async (req, res) => {
  const chatScreen = await ChatScreenModel.find()
    .populate("teacher")
    .catch((err) => console.log("EROOR IS" + err));
  if (chatScreen) res.json(chatScreen);
};
/////////////////////////////////////
const getCustom = async (req, res) => {
  const chatScreen = await ChatScreenModel.findById(req.params.id)
    .populate("teacher")
    .catch((err) => console.log("ERROR IS" + err));
  if (chatScreen) {
    res.json(chatScreen);
  }
};
////////////////////////////////////
const modifiey = async (req, res) => {
    const { chats, teacher } = req.body;
    const chatScreen = await ChatScreenModel.updateOne({
    _id: req.params.id,
    chats: chats,
    teacher: teacher,
  }).catch((err) => console.log("ERROR IS" + err));
  if (chatScreen) {
    res.json(chatScreen);
  }
};
const deleteCustom = async (req, res) => {
  const chatScreen = await ChatScreenModel.deleteOne({
    _id: req.params.id,
  }).catch((err) => console.log("ERROR IS" + err));
  if (chatScreen) {
    res.json(chatScreen);
  }
};

module.exports = {
  add,
  getAll,
  getCustom,
  modifiey,
  deleteCustom,
};