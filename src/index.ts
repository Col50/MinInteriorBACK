// src/index.ts
import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./database/data-source";
import expenseNotificationRoutes from "./routes/expenseNotificationRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", expenseNotificationRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
