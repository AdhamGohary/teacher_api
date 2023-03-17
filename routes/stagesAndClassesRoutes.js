const express = require("express");
const router = express.Router();
const stagesAndClassesController = require('../controllers/stagesAndClassesController');
router.post("/stagesAndClassesRoutes/add",stagesAndClassesController.addClassAndGroup );
router.get("/stagesAndClassesRoutes/get", stagesAndClassesController.getAllClassesAndGroups);
router.get("/stagesAndClassesRoutes/:id", stagesAndClassesController.getCustomClassAndGroup);
router.patch("/stagesAndClassesRoutes/:id", stagesAndClassesController.modifieyClassAndGroup);
router.delete("/stagesAndClassesRoutes/:id", stagesAndClassesController.deleteCustomClassAndGroup);
module.exports = router;
