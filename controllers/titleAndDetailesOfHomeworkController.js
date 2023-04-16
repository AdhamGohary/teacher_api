const TitleAndDetailesOfHomeworkModel = require("../models/titleAndDetailesOfHomeworkModel");
const add = async (req, res) => {
  const { /*titleOfHomework, detailsOfHomework */titleAndDetails} = req.body;
  const titleAndDetailesOfHomeworkModel = await new TitleAndDetailesOfHomeworkModel({
    // titleOfHomework: titleOfHomework,
    // detailsOfHomework: detailsOfHomework,
    titleAndDetails
  })
    .save()
    .catch((err) => console.log("ERROR IS " + err));
  if (titleAndDetailesOfHomeworkModel) res.json(titleAndDetailesOfHomeworkModel);
};
const getAll = async (req, res) => {
  const titleAndDetailesOfHomeworkModel = await TitleAndDetailesOfHomeworkModel.find()
   
    .catch((err) => console.log("ERROR IS " + err));
  if (titleAndDetailesOfHomeworkModel) res.json(titleAndDetailesOfHomeworkModel);
};
const getCustom = async (req, res) => {
  const titleAndDetailesOfHomeworkModel = await TitleAndDetailesOfHomeworkModel.findById(req.params.id)
   
    .catch((err) => console.log("ERROR IS " + err));
  if (titleAndDetailesOfHomeworkModel) res.json(titleAndDetailesOfHomeworkModel);
};
const modifiey = async (req, res) => {
const { /*titleOfHomework, detailsOfHomework*/ titleAndDetails} =
    req.body;
  const titleAndDetailesOfHomeworkModel = await TitleAndDetailesOfHomeworkModel.updateOne({
    _id: req.params.id,
    titleAndDetails
    // titleOfHomework: titleOfHomework,
    // detailsOfHomework: detailsOfHomework,
  }).catch((err) => console.log("ERROR IS" + err));
  if (titleAndDetailesOfHomeworkModel) res.json(titleAndDetailesOfHomeworkModel);
};
const deleteCustom = async (req, res) => {
  const titleAndDetailesOfHomeworkModel = await TitleAndDetailesOfHomeworkModel.deleteOne({
    _id: req.params.id,
  }).catch((err) => console.log("ERROR IS" + err));
  if (titleAndDetailesOfHomeworkModel) res.json(titleAndDetailesOfHomeworkModel);
};
module.exports = {
  add,
  getAll,
  getCustom,
  modifiey,
  deleteCustom,
};
