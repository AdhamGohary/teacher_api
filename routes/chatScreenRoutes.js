const express = require("express");
const router = express.Router();
const ChatScreenController = require('E:/programs/node.js_projects/teacher_app_api/controllers/chatScreenController');
router.post("/chatScreenRoutes/add",ChatScreenController.add );
router.get("/chatScreenRoutes/get", ChatScreenController.getAll);
router.get("/chatScreenRoutes/:id", ChatScreenController.getCustom);
router.patch("/chatScreenRoutes/:id", ChatScreenController.modifiey);
router.delete("/chatScreenRoutes/:id", ChatScreenController.deleteCustom);
module.exports = router;