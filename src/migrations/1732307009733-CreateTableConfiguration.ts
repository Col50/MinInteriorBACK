import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableConfiguration1732307009733 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE notification (
                id INT PRIMARY KEY AUTO_INCREMENT,
                userId INT NOT NULL,
                jsonData JSON NOT NULL
            )
          `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    DROP TABLE notification
  `);
  }
}
