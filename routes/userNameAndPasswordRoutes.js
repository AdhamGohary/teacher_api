const express = require("express");
const router = express.Router();
const UserNameAndPaswwordController = require('E:/programs/node.js_projects/teacher_app_api/controllers/userNameAndPasswordController');
router.post("/userNameAndPasswordRoutes/add",UserNameAndPaswwordController.addUser );
router.get("/userNameAndPasswordRoutes/get", UserNameAndPaswwordController.getUsers);
router.get("/userNameAndPasswordRoutes/:id", UserNameAndPaswwordController.getCustomUser);
router.patch("/userNameAndPasswordRoutes/:id", UserNameAndPaswwordController.modifieyUser);
router.delete("/userNameAndPasswordRoutes/:id", UserNameAndPaswwordController.deleteCustomUser);
module.exports = router;
