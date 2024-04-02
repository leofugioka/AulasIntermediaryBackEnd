import express from "express";

let router = express.Router();

import userController from "./UserController.js";
import teacherController from "./TeacherController.js";
import courseController from "./CourseController.js";
import evaluationController from "./EvaluationController.js";

router.get("/", function (req, res) {
  console.log("Oi");
  res.status(200).json({ message: "Oi 2!" });
});

router.use("/", userController);
router.use("/", teacherController);
router.use("/", courseController);
router.use("/", evaluationController);

export default router;
