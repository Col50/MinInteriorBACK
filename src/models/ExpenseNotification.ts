import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("expense_notifications")
export class ExpenseNotification {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  period: string = "";

  @Column()
  entityCode: number = 0;

  @Column()
  entityName: string = "";

  @Column()
  bpin: string = "";

  @Column()
  account: string = "";

  @Column()
  accountName: string = "";

  @Column()
  scopeCode: string = "";

  @Column()
  scopeName: string = "";

  @Column()
  expenseVigencyCode: string = "";

  @Column()
  expenseVigencyName: string = "";

  @Column()
  budgetSectionCode: string = "";

  @Column()
  budgetSectionName: string = "";

  @Column()
  sectorCode: string = "";

  @Column()
  sectorName: string = "";

  @Column({ nullable: true })
  programmaticCodeMga: string = "";

  @Column({ nullable: true })
  programmaticNameMga: string = "";

  @Column("float")
  initialAppropriation: number = 0;

  @Column("float")
  definitiveAppropriation: number = 0;
}
