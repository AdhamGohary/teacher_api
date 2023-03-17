const TableScreenModel = require("../models/tableScreenModel");
///////////////////////////////////////
const add = async (req, res) => {
  const { day, subjectOfThisDay, teacher } = req.body;
  const tableScreen = await new TableScreenModel({
    day: day,
    subjectOfThisDay: subjectOfThisDay,
    teacher: teacher,
  })
    .save()
    .catch((err) => console.log("ERROR IS" + err));
  if (tableScreen) {
    res.json(tableScreen);
  }
};
//////////////////////////////////////
const getAll = async (req, res) => {
  const tableScreen = await TableScreenModel.find()
    .populate("teacher")
    .catch((err) => console.log("EROOR IS" + err));
  if (tableScreen) res.json(tableScreen);
};
/////////////////////////////////////
const getCustom = async (req, res) => {
  const tableScreen = await TableScreenModel.findById(req.params.id)
    .populate("teacher")
    .catch((err) => console.log("ERROR IS" + err));
  if (tableScreen) {
    res.json(tableScreen);
  }
};
////////////////////////////////////
const modifiey = async (req, res) => {
    const { day, subjectOfThisDay, teacher } = req.body;
    const tableScreen = await TableScreenModel.updateOne({
    _id: req.params.id,
    day: day,
    subjectOfThisDay: subjectOfThisDay,
    teacher: teacher,
  }).catch((err) => console.log("ERROR IS" + err));
  if (tableScreen) {
    res.json(tableScreen);
  }
};
const deleteCustom = async (req, res) => {
  const tableScreen = await TableScreenModel.deleteOne({
    _id: req.params.id,
  }).catch((err) => console.log("ERROR IS" + err));
  if (tableScreen) {
    res.json(tableScreen);
  }
};
module.exports = {
  add,
  getAll,
  getCustom,
  modifiey,
  deleteCustom,
};
