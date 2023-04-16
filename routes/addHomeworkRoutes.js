const express = require("express");
const router = express.Router();
const AddHomeworkScreenController = require('../controllers/addHomeworkScreenController');
router.post("/addHomeworkRoutes/add",AddHomeworkScreenController.add );
router.get("/addHomeworkRoutes/get", AddHomeworkScreenController.getAll);
router.get("/addHomeworkRoutes/:id", AddHomeworkScreenController.getCustom);
router.patch("/addHomeworkRoutes/:id", AddHomeworkScreenController.modifiey);
router.delete("/addHomeworkRoutes/:id", AddHomeworkScreenController.deleteCustom);
module.exports = router;
