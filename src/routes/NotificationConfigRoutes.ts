// src/routes/expenseNotificationRoutes.ts
import {Router} from "express";
import {ExpenseNotificationController} from "../controllers/NotificationConfigController";

export const notificationRouter = Router();
const controller = new ExpenseNotificationController();

// Define las rutas
notificationRouter.get("/", controller.getAll);
notificationRouter.get("/:id", controller.getOne);
notificationRouter.post("/", controller.create);
notificationRouter.put("/:id", controller.update);
notificationRouter.delete("/:id", controller.delete);
