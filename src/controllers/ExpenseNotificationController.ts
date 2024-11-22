import { Request, Response } from "express";
import { ExpenseNotificationService } from "../services/ExpenseNotificationService";

export class ExpenseNotificationController {
  private service = new ExpenseNotificationService();

  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const notifications = await this.service.getAll();
      return res.json(notifications);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Failed to retrieve expense notifications" });
    }
  }

  public async getOne(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const notification = await this.service.getOne(id);
      if (!notification)
        return res.status(404).json({ error: "Notification not found" });
      return res.json(notification);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Failed to retrieve expense notification" });
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const notification = await this.service.create(req.body);
      return res.status(201).json(notification);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Failed to create expense notification" });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const notification = await this.service.update(id, req.body);
      if (!notification)
        return res.status(404).json({ error: "Notification not found" });
      return res.json(notification);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Failed to update expense notification" });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const deleted = await this.service.delete(id);
      if (!deleted)
        return res.status(404).json({ error: "Notification not found" });
      return res.status(204).send();
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Failed to delete expense notification" });
    }
  }
}
