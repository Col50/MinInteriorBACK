// src/index.ts
import "reflect-metadata";
import * as dotenv from "dotenv";
import * as path from "path";
dotenv.config({path: path.join(__dirname, "../.env")});
import {AppDataSource} from "./dataSource";
import {appRouter} from "./routes";

import express from "express";
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Routes
app.use("/api/v1", appRouter);

const PORT = process.env.API_PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
