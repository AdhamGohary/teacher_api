const AddHomeworkModel = require("../models/addHomeworkScreenModel");
const add = async (req, res) => {
  const { theClass, stage, subject, titleAndDetailesOfHomework, teacher } =
    req.body;
  const addHomeworkModel = await new AddHomeworkModel({
    stage: stage,
    theClass: theClass,
    subject: subject,
    titleAndDetailesOfHomework: titleAndDetailesOfHomework,
    teacher: teacher,
  })
    .save()
    .catch((err) => console.log("ERROR IS " + err));
  if (addHomeworkModel) res.json(addHomeworkModel);
};
const getAll = async (req, res) => {
  const addHomeworkModel = await AddHomeworkModel.find()
    .populate("titleAndDetailesOfHomework").populate("teacher")
    .catch((err) => console.log("ERROR IS " + err));
  if (addHomeworkModel) res.json(addHomeworkModel);
};
const getCustom = async (req, res) => {
  const addHomeworkModel = await AddHomeworkModel.findById(req.params.id)
    .populate("titleAndDetailesOfHomework").populate("teacher")
    .catch((err) => console.log("ERROR IS " + err));
  if (addHomeworkModel) res.json(addHomeworkModel);
};
const modifiey = async (req, res) => {
  const { theClass, stage, subject, titleAndDetailesOfHomework, teacher } =
    req.body;
  const addHomeworkModel = await AddHomeworkModel.updateOne({
    _id: req.params.id,
    theClass: theClass,
    stage: stage,
    subject: subject,
    titleAndDetailesOfHomework: titleAndDetailesOfHomework,
    teacher: teacher,
  }).catch((err) => console.log("ERROR IS" + err));
  if (addHomeworkModel) res.json(addHomeworkModel);
};
const deleteCustom = async (req, res) => {
  const addHomeworkModel = await AddHomeworkModel.deleteOne({
    _id: req.params.id,
  }).catch((err) => console.log("ERROR IS" + err));
  if (addHomeworkModel) res.json(addHomeworkModel);
};
module.exports = {
  add,
  getAll,
  getCustom,
  modifiey,
  deleteCustom,
};
