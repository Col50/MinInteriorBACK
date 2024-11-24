// src/routes/expenseNotificationRoutes.ts
import { Router } from "express";
import { NotificationConfigController } from "../controllers/NotificationConfigController";

const controller = new NotificationConfigController();

export const notificationConfigRouter = Router();
notificationConfigRouter.get("/", controller.getAll);
notificationConfigRouter.get("/:id", controller.getOne);
notificationConfigRouter.post("/", controller.create);
notificationConfigRouter.put("/:id", controller.update);
notificationConfigRouter.delete("/:id", controller.delete);
