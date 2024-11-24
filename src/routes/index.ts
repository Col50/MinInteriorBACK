import { Router } from "express";
import { notificationConfigRouter } from "./NotificationConfigRoutes";

export const appRouter = Router();

appRouter.use("/notificationConfig", notificationConfigRouter);
