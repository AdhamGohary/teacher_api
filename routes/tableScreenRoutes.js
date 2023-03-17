const express = require("express");
const router = express.Router();
const TableScreenController = require('E:/programs/node.js_projects/teacher_app_api/controllers/tableScreenController');
router.post("/tableScreenRoutes/add",TableScreenController.add );
router.get("/tableScreenRoutes/get", TableScreenController.getAll);
router.get("/tableScreenRoutes/:id", TableScreenController.getCustom);
router.patch("/tableScreenRoutes/:id", TableScreenController.modifiey);
router.delete("/tableScreenRoutes/:id", TableScreenController.deleteCustom);
module.exports = router;