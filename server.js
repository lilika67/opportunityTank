import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import allRoutes from "./routes/index.js";
import cors from "cors";
import bodyParser from "body-parser";
import path from 'path';
import { fileURLToPath } from 'url';
// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to lactoMama website",
  });
});

// API routes
app.use("/api/v1", allRoutes);

app.listen(PORT, () => {
  mongoose.connect(process.env.MONGODB_URL, {
    ssl: true,
    tlsAllowInvalidCertificates: true, 
  })
  .then(() => {
    console.log(`Server is running on port ${PORT}`);
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
});
