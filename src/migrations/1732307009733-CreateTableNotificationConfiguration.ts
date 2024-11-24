import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableNotificationConfiguration1732307009733 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE notificationConfig (
                id INT PRIMARY KEY AUTO_INCREMENT,
                userId INT NOT NULL,
                jsonData JSON NOT NULL
            )
          `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    DROP TABLE notificationConfig
  `);
  }
}
