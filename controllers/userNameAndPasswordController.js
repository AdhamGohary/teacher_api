const UserNameAndPaswwordModel = require("../models/userNameAndPaswwordModel");
const addUser = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const userNameAndPaswword = await new UserNameAndPaswwordModel({
      userName: userName,
      password: password,
    }).save();

    if (userNameAndPaswword) {
      res.json(userNameAndPaswword);
    }
  } catch (error) {
    console.log("ERROR IS" + error);
  }
};
const getUsers = async (req, res) => {
  try {
    const userNameAndPaswword = await UserNameAndPaswwordModel.find();
    if (userNameAndPaswword) res.json(userNameAndPaswword);
  } catch (error) {
    console.log("ERROR IS" + error);
  }
};
const getCustomUser = async (req, res) => {
  try {
    const userNameAndPaswword = await UserNameAndPaswwordModel.findById(
      req.params.id
    );
    if (userNameAndPaswword) {
      res.json(userNameAndPaswword);
    }
  } catch (error) {
    console.log("ERROR IS" + error);
  }
};
const modifieyUser = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const userNameAndPaswword = await UserNameAndPaswwordModel.updateOne({
      _id: req.params.id},
      {userName: userName,
      password: password,
    });
    if (userNameAndPaswword) {
      res.json(userNameAndPaswword);
    }
  } catch (error) {
    console.log("ERROR IS" + error);
  }
};
const deleteCustomUser = async (req, res) => {
  try {
    const userNameAndPaswword = await UserNameAndPaswwordModel.deleteOne({
      _id: req.params.id,
    });
    if (userNameAndPaswword) {
      res.json(userNameAndPaswword);
    }
  } catch (error) {
    console.log("ERROR IS" + error);
  }
};
module.exports = {
  addUser,
  getUsers,
  getCustomUser,
  modifieyUser,
  deleteCustomUser,
};
