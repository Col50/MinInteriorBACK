import dotenv from "dotenv";
import path from "path";
dotenv.config({path: path.join(__dirname, "../../.env")});
import {DataSource} from "typeorm";
import {ExpenseNotification} from "../models/ExpenseNotification";

export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as any,
  username: process.env.DB_PROFILE as any,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [ExpenseNotification],
  subscribers: [],
  migrations: [],
});
