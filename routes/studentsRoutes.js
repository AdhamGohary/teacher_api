const express = require("express");
const router = express.Router();
const StudentsController = require('../controllers/studentsController');
router.post("/studentsRoutes/add",StudentsController.addStudent );
router.get("/studentsRoutes/get", StudentsController.getAllStudents);
router.get("/studentsRoutes/:id", StudentsController.getCustomStudent);
router.patch("/studentsRoutes/:id", StudentsController.modifieyStudent);
router.delete("/studentsRoutes/:id", StudentsController.deleteCustomStudent);
module.exports = router;