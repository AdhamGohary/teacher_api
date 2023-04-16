const express = require("express");
const router = express.Router();
const TitleAndDetailesOfHomeworkController = require('../controllers/titleAndDetailesOfHomeworkController');
router.post("/titleAndDetailsOfHomeworkRoutes/add",TitleAndDetailesOfHomeworkController.add );
router.get("/titleAndDetailsOfHomeworkRoutes/get", TitleAndDetailesOfHomeworkController.getAll);
router.get("/titleAndDetailsOfHomeworkRoutes/:id", TitleAndDetailesOfHomeworkController.getCustom);
router.patch("/titleAndDetailsOfHomeworkRoutes/:id", TitleAndDetailesOfHomeworkController.modifiey);
router.delete("/titleAndDetailsOfHomeworkRoutes/:id", TitleAndDetailesOfHomeworkController.deleteCustom);
module.exports = router;