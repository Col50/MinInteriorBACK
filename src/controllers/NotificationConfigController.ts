// src/controllers/ExpenseNotificationController.ts
import {Request, Response} from "express";
import {ExpenseNotificationService} from "../services/NotificationConfigService";

export class ExpenseNotificationController {
  private service = new ExpenseNotificationService();

  public getAll = async (req: Request, res: Response) => {
    // TODO: Enviar todas las configuraciones del usuario actual
    try {
      const notifications = await this.service.getAll();
      res.json(notifications);
    } catch (error) {
      res.status(500).json({error: "Failed to retrieve expense notifications"});
    }
  };

  public getOne = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const notification = await this.service.getOne(id);
      if (!notification) {
        res.status(404).json({error: "Notification not found"});
        return;
      }
      res.json(notification);
    } catch (error) {
      res.status(500).json({error: "Failed to retrieve expense notification"});
    }
  };

  public create = async (req: Request, res: Response) => {
    try {
      // TODO: Usar userId de token de autenticación
      const notificationConfigToCreate = {jsonData: req.body, userId: 1};
      const notificationConfig = await this.service.create(
        notificationConfigToCreate
      );
      res.status(201).json(notificationConfig);
    } catch (error) {
      res.status(500).json({error: "Failed to create expense notification"});
    }
  };

  public update = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const notificationConfigToUpdate = {jsonData: req.body};
      const notificationConfig = await this.service.update(
        id,
        notificationConfigToUpdate
      );
      if (!notificationConfig) {
        res.status(404).json({error: "Notification not found"});
        return;
      }
      res.json(notificationConfig);
    } catch (error) {
      res.status(500).json({error: "Failed to update expense notification"});
    }
  };

  public delete = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const result = await this.service.delete(id);
      if (!result) {
        res.status(404).json({error: "Notification not found"});
        return;
      }
      res.status(200).json({message: "Notification deleted successfully"});
    } catch (error) {
      res.status(500).json({error: "Failed to delete expense notification"});
    }
  };
}
