import {AppDataSource} from "../dataSource";
import {Notification} from "../entities/notification";

export class ExpenseNotificationService {
  private DATA_SOURCE = AppDataSource.getRepository(Notification);

  public async getAll(): Promise<Notification[]> {
    return await this.DATA_SOURCE.find();
  }

  public async getOne(id: number): Promise<Notification | null> {
    return await this.DATA_SOURCE.findOneBy({id});
  }

  public async create(data: Partial<Notification>): Promise<void> {
    const notification = this.DATA_SOURCE.create(data);
    await this.DATA_SOURCE.save(notification);
  }

  public async update(
    id: number,
    data: Partial<Notification>
  ): Promise<Notification | null> {
    const notification = await this.getOne(id);
    if (!notification) return null;
    Object.assign(notification, data);
    return await this.DATA_SOURCE.save(notification);
  }

  public async delete(id: number): Promise<boolean> {
    const result = await this.DATA_SOURCE.delete(id);
    return result.affected !== 0;
  }
}
