const express = require("express");
const router = express.Router();
const studentsController = require('../controllers/studentsController');
router.post("/studentsRoutes/add",studentsController.addStudent );
router.get("/studentsRoutes/get", studentsController.getAllStudents);
router.get("/studentsRoutes/:id", studentsController.getCustomStudent);
router.patch("/studentsRoutes/:id", studentsController.modifieyStudent);
router.delete("/studentsRoutes/:id", studentsController.deleteCustomStudent);
module.exports = router;