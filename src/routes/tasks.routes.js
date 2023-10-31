import { Router } from "express";
import { authRequired } from "../middlewares/validateTokens.js";
import {
  getTasks,
  getTask,
  createTasks,
  deleteTasks,
  updateTasks,
} from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTasksSchema } from "../schemas/task.schemas.js";

//Rutas necesarias para las páginas
//

const router = Router();
router.get("/tasks", authRequired, getTasks);
//por ejemplo, para acceder a las tareas se necesita verificar el usuario y obtener las tareas y así con todas

router.get("/tasks/:id", authRequired, getTask);
router.post(
  "/tasks",
  authRequired,
  validateSchema(createTasksSchema),
  createTasks
);
router.delete("/tasks/:id", authRequired, deleteTasks);
router.put("/tasks/:id", authRequired, updateTasks);
export default router;
