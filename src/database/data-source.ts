import { DataSource } from "typeorm";
import { ExpenseNotification } from "../models/ExpenseNotification";

export const AppDataSource = new DataSource({
  type: "mariadb",
  host: "localhost",
  port: 3306,
  username: "root", // Cambia esto con tu usuario de base de datos
  password: "password", // Cambia esto con tu contraseña de base de datos
  database: "mint_interior",
  synchronize: true,
  logging: true,
  entities: [ExpenseNotification],
  subscribers: [],
  migrations: [],
});
