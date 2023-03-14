const stagesAndClassesModel = require("../models/stagesAndClassesModel");
const StagesAndClassModel = require("../models/stagesAndClassesModel");
const addClassAndGroup = async (req, res) => {
  const { theClass, stage, subject,teacher } = req.body;
  const stagesAndClassesModel = await new StagesAndClassModel({
    theClass: theClass,
    stage: stage,
    subject: subject,
    teacher:teacher

  })
    .save()
    .catch((err) => console.log("ERROR IS " + err));
  if (stagesAndClassesModel) res.json( stagesAndClassesModel);
};
const getAllClassesAndGroups = async (req, res) => {
  const stagesAndClassesModel = await StagesAndClassModel.find().populate('teacher').catch((err) =>
    console.log("ERROR IS " + err)
  );
  if (stagesAndClassesModel) res.json(stagesAndClassesModel);
};
const getCustomClassAndGroup = async (req, res) => {
  const stagesAndClassesModel = await StagesAndClassModel.findById(
    req.params.id
  ).populate('teacher').catch((err) => console.log("ERROR IS " + err));
  if (stagesAndClassesModel) res.json(stagesAndClassesModel);
};
const modifieyClassAndGroup = async (req, res) => {
  const { theClass, stage, subject,teacher } = req.body;
  const stagesAndClassesModel = await StagesAndClassModel.updateOne({
    _id: req.params.id,
    theClass: theClass,
    stage: stage,
    subject: subject,
    teacher:teacher
  }).catch((err) => console.log("ERROR IS" + err));
  if (stagesAndClassesModel) res.json(stagesAndClassesModel);
};
const deleteCustomClassAndGroup = async (req, res) => {
 const stagesAndClassesModel = await  StagesAndClassModel.deleteOne({
    _id: req.params.id,
  }).catch((err) => console.log("ERROR IS" + err));
  if (stagesAndClassesModel) res.json(stagesAndClassesModel);
};
module.exports = {
  addClassAndGroup,
  getAllClassesAndGroups,
  getCustomClassAndGroup,
  modifieyClassAndGroup,
  deleteCustomClassAndGroup,
};