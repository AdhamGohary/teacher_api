const express = require("express");
const router = express.Router();
const homeworkScreenController = require('../controllers/homeworkScreenController');
router.post("/homeworkScreenRoutes/add",homeworkScreenController.add );
router.get("/homeworkScreenRoutes/get", homeworkScreenController.getAll);
router.get("/homeworkScreenRoutes/:id", homeworkScreenController.getCustom);
router.patch("/homeworkScreenRoutes/:id", homeworkScreenController.modifiey);
router.delete("/homeworkScreenRoutes/:id", homeworkScreenController.deleteCustom);
module.exports = router;