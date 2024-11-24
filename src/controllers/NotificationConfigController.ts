// src/controllers/ExpenseNotificationController.ts
import { Request, Response } from "express";
import { NotificationConfigService } from "../services/NotificationConfigService";

export class NotificationConfigController {
  private service = new NotificationConfigService();

  public getAll = async (_req: Request, res: Response) => {
    // TODO: Enviar todas las configuraciones del usuario actual
    try {
      const notificationConfigurations = await this.service.getAll();
      res.json(notificationConfigurations);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve notification configurations" });
    }
  };

  public getOne = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const notificationConfig = await this.service.getById(id);
      if (!notificationConfig) {
        res.status(404).json({ error: "Notification config not found" });
        return;
      }
      res.json(notificationConfig);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve notification config" });
    }
  };

  public create = async (req: Request, res: Response) => {
    try {
      // TODO: Usar userId de token de autenticación
      const notificationConfigToCreate = { jsonData: req.body, userId: 1 };
      const notificationConfig = await this.service.create(notificationConfigToCreate);
      res.status(201).json(notificationConfig);
    } catch (error) {
      res.status(500).json({ error: "Failed to create notification config" });
    }
  };

  public update = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const notificationConfigToUpdate = { id, jsonData: req.body };
      const notificationConfig = await this.service.update(notificationConfigToUpdate);
      if (!notificationConfig) {
        res.status(404).json({ error: "Notification config not found" });
        return;
      }
      res.json(notificationConfig);
    } catch (error) {
      res.status(500).json({ error: "Failed to update notification config" });
    }
  };

  public delete = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const result = await this.service.delete(id);
      if (!result) {
        res.status(404).json({ error: "Notification config not found" });
        return;
      }
      res.status(200).json({ message: "Notification deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete notification config" });
    }
  };
}
