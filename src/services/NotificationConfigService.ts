import { AppDataSource } from "../dataSource";
import { Notification } from "../entities/notification";

export class NotificationConfigService {
  private dataSource = AppDataSource.getRepository(Notification);

  public async getAll(): Promise<Notification[]> {
    return await this.dataSource.find();
  }

  public async getById(id: number): Promise<Notification | null> {
    return await this.dataSource.findOneBy({ id });
  }

  public async create(notificationConfigToCreate: Partial<Notification>): Promise<void> {
    const notificationConfig = this.dataSource.create(notificationConfigToCreate);
    await this.dataSource.save(notificationConfig);
  }

  public async update(notificationConfigToUpdate: Partial<Notification>): Promise<Notification | null> {
    if (!notificationConfigToUpdate.id) {
      return null;
    }
    const notificationConfig = await this.getById(notificationConfigToUpdate.id);
    if (!notificationConfig) {
      return null;
    }
    Object.assign(notificationConfig, notificationConfigToUpdate);
    return await this.dataSource.save(notificationConfig);
  }

  public async delete(id: number): Promise<boolean> {
    const deletionResult = await this.dataSource.delete(id);
    return deletionResult.affected !== 0;
  }
}
