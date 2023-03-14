const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userNameAndPasswordRoutes = require("../routes/userNameAndPasswordRoutes");
const stagesAndClassesRoutes = require('../routes/stagesAndClassesRoutes');
// const routes = require('E:/programs/node.js_projects/teacher_app_api/routes/routes');
app.use(bodyParser.json());
app.use("/teacherapp",/*routes*/stagesAndClassesRoutes /*userNameAndPasswordRoutes*/, (req, res, next) => {
  console.log("from middle ware");
  next();
});

mongoose
  .connect(
    "mongodb+srv://teacher_app_api:3PUHVcGioHb4inyJ@cluster0.bituowo.mongodb.net/teacher_app_api?retryWrites=true&w=majority" ||
      process.env.MONGO_PW
  )
  .then(
    () => console.log("mongo is connect"),
    app.listen(9090 || process.env.PORT, () => console.log("server is running"))
  )
  .catch((err) => console.log("ERROR IS" + err));
