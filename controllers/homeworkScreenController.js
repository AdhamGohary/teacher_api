const HomeworkScreenModel = require("../models/homeworkScreenModel");
///////////////////////////////////////
const add = async (req, res) => {
  const { stage, theClass, subject, teacher} = req.body;
  const homeworkScreen = await new HomeworkScreenModel({
    stage: stage,
    theClass: theClass,
    subject: subject,
    teacher: teacher,
  })
    .save()
    .catch((err) => console.log("ERROR IS" + err));
  if (homeworkScreen) {
    res.json(homeworkScreen);
  }
};
//////////////////////////////////////
const getAll = async (req, res) => {
  const homeworkScreen = await HomeworkScreenModel.find()
   .populate("teacher")
    .catch((err) => console.log("EROOR IS" + err));
  if (homeworkScreen) res.json(homeworkScreen);
};
/////////////////////////////////////
const getCustom = async (req, res) => {
  const homeworkScreen = await HomeworkScreenModel.findById(req.params.id).populate('teacher').catch((err) =>
    console.log("ERROR IS" + err)
  );
  if (homeworkScreen) {
    res.json(homeworkScreen);
  }
};
////////////////////////////////////
const modifiey = async (req, res) => {
    const { stage, theClass, subject, teacher} = req.body;
    const homeworkScreen = await HomeworkScreenModel.updateOne({
    _id: req.params.id,
    stage: stage,
    theClass: theClass,
    subject: subject,
    teacher: teacher,
  }).catch((err) => console.log("ERROR IS" + err));
  if (homeworkScreen) {
    res.json(homeworkScreen);
  }
};
const deleteCustom = async (req, res) => {
  const homeworkScreen = await HomeworkScreenModel.deleteOne({
    _id: req.params.id,
  }).catch((err) => console.log("ERROR IS" + err));
  if (homeworkScreen) {
    res.json(homeworkScreen);
  }
};
module.exports = {
  add,
  getAll,
  getCustom,
  modifiey,
  deleteCustom,
};