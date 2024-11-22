import {Router} from "express";
import {notificationRouter} from "./NotificationConfigRoutes";

export const appRouter = Router();

appRouter.use("/notificationConfig", notificationRouter);
