const StudentsModel = require("../models/studentsModel");
///////////////////////////////////////
const addStudent = async (req, res) => {
  const { img, name, parentTelephoneNumber, theClass} = req.body;
  const students = await new StudentsModel({
    img: img,
    name: name,
    parentTelephoneNumber: parentTelephoneNumber,
    theClass: theClass,
  })
    .save()
    .catch((err) => console.log("ERROR IS" + err));
  if (students) {
    res.json(students);
  }
};
//////////////////////////////////////
const getAllStudents = async (req, res) => {
  const students = await StudentsModel.find()
   .populate("theClass")
    .catch((err) => console.log("EROOR IS" + err));
  if (students) res.json(students);
};
/////////////////////////////////////
const getCustomStudent = async (req, res) => {
  const students = await StudentsdModel.findById(req.params.id).populate('theClass').catch((err) =>
    console.log("ERROR IS" + err)
  );
  if (students) {
    res.json(students);
  }
};
////////////////////////////////////
const modifieyStudent = async (req, res) => {
const { img, name, parentTelephoneNumber,theClass } = req.body;
  const students = await StudentsModel.updateOne({
    _id: req.params.id,
    img: img,
    name: name,
    parentTelephoneNumber: parentTelephoneNumber,
    theClass: theClass,
  }).catch((err) => console.log("ERROR IS" + err));
  if (students) {
    res.json(students);
  }
};
const deleteCustomStudent = async (req, res) => {
  const students = await StudentsModel.deleteOne({
    _id: req.params.id,
  }).catch((err) => console.log("ERROR IS" + err));
  if (students) {
    res.json(students);
  }
};
module.exports = {
  addStudent,
  getAllStudents,
  getCustomStudent,
  modifieyStudent,
  deleteCustomStudent,
};
