import express from "express";
import config from "./config/config";
import mongoose from "mongoose";
import jobRoutes from "./module/jobs/job.route.js";

const app = express();

app.use("/api/jobs", jobRoutes);

mongoose
  .connect(config.mongoUri || "")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(config.port, () => {
      console.log(
        `Server running in ${config.nodeEnv} mode on port ${config.port}`
      );
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
