// src/index.ts
import "reflect-metadata";
import * as dotenv from "dotenv";
import * as path from "path";
dotenv.config({path: path.join(__dirname, "/../.env")});
import {AppDataSource} from "./database/data-source";
import expenseNotificationRoutes from "./routes/expenseNotificationRoutes";

import express from "express";
const app = express();

// Middlewares
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

const PORT = process.env.PORT || 3000;

// Routes
app.use("/api", expenseNotificationRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
