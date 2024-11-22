import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  userId: number = 0;

  @Column("json")
  jsonData: object = {};
}
