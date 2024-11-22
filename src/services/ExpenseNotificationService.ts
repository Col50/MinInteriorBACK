import { AppDataSource } from "../database/data-source";
import { ExpenseNotification } from "../models/ExpenseNotification";

export class ExpenseNotificationService {
  private repo = AppDataSource.getRepository(ExpenseNotification);

  public async getAll(): Promise<ExpenseNotification[]> {
    return await this.repo.find();
  }

  public async getOne(id: number): Promise<ExpenseNotification | null> {
    return await this.repo.findOneBy({ id });
  }

  public async create(
    data: Partial<ExpenseNotification>
  ): Promise<ExpenseNotification> {
    const notification = this.repo.create(data);
    return await this.repo.save(notification);
  }

  public async update(
    id: number,
    data: Partial<ExpenseNotification>
  ): Promise<ExpenseNotification | null> {
    const notification = await this.getOne(id);
    if (!notification) return null;
    Object.assign(notification, data);
    return await this.repo.save(notification);
  }

  public async delete(id: number): Promise<boolean> {
    const result = await this.repo.delete(id);
    return result.affected !== 0;
  }
}
