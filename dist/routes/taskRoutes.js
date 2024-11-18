import express from "express";
import { taskController} from "../controllers/taskController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = express.Router();

// Routes
router.post("/newtask",authMiddleware, taskController.createTask);
router.get("/alltasks",authMiddleware,taskController.getAllTasks);
router.get("/taskbyid/:id",authMiddleware,taskController.getTaskById)
router.put('/updatetask/:id',authMiddleware,taskController.updateTask)
router.delete("/deletetask/:id",authMiddleware,taskController.deleteTask)
router.patch("/task/:id/progress",authMiddleware,taskController.markTaskInProgress)
router.patch("/task/:id/complete",authMiddleware,taskController.markTaskAsComplete)

export default router;

