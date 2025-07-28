import dotenv from "dotenv";
dotenv.config();

interface Config {
  port: number;
  mongoUri?: string;
  nodeEnv: "development" | "production" | "test" | string;
}

const port = process.env.PORT ? Number(process.env.PORT) : 5000;

if (isNaN(port)) {
  throw new Error("Invalid PORT environment variable. Must be a number.");
}

const config: Config = {
  port,
  mongoUri: process.env.MONGO_URI,
  nodeEnv: process.env.NODE_ENV || "development",
};

export default config;
