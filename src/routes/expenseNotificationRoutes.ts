import { Router } from "express";
import { ExpenseNotificationController } from "../controllers/ExpenseNotificationController";

const router = Router();
const controller = new ExpenseNotificationController();

router.get("/expense-notifications", (req, res) => controller.getAll(req, res));
router.get("/expense-notifications/:id", (req, res) =>
  controller.getOne(req, res)
);
router.post("/expense-notifications", (req, res) =>
  controller.create(req, res)
);
router.put("/expense-notifications/:id", (req, res) =>
  controller.update(req, res)
);
router.delete("/expense-notifications/:id", (req, res) =>
  controller.delete(req, res)
);

export default router;
