const UserNameAndPaswwordModel = require("../models/userNameAndPaswwordModel");
const addUser = async (req, res) => {
  const { userName, password } = req.body;
  const userNameAndPaswword = await new UserNameAndPaswwordModel({
    userName: userName,
    password: password,
  })
    .save()
    .catch((err) => console.log("ERROR IS" + err));
  if (userNameAndPaswword) {
    res.json(userNameAndPaswword);
  }
};
// };
const getUsers = async (req, res) => {
  const userNameAndPaswword = await UserNameAndPaswwordModel.find().catch(
    (err) => console.log("EROOR IS" + err)
  );
  if (userNameAndPaswword) res.json(userNameAndPaswword);
};
const getCustomUser = async (req, res) => {
  const userNameAndPaswword = await UserNameAndPaswwordModel.findById(
    req.params.id
  ).catch((err) => console.log("ERROR IS" + err));
  if (userNameAndPaswword) {
    res.json(userNameAndPaswword);
  }
}; 
const modifieyUser = async (req, res) => {
  const { userName, password } = req.body;
  const userNameAndPaswword = await UserNameAndPaswwordModel
    .updateOne({
      _id: req.params.id,
      userName: userName,
      password: password,
    })
    .catch((err) => console.log("ERROR IS" + err));
  if (userNameAndPaswword) {
    res.json(userNameAndPaswword);
  }
};
const deleteCustomUser = async (req, res) => {
  const userNameAndPaswword = await UserNameAndPaswwordModel
    .deleteOne({
      _id: req.params.id,
    })
    .catch((err) => console.log("ERROR IS" + err));
  if (userNameAndPaswword) {
    res.json(userNameAndPaswword);
  }
};
module.exports = {
  addUser,
  getUsers,
  getCustomUser,
  modifieyUser,
  deleteCustomUser
};
