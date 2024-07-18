import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import allRoutes from "./routes/index.js";
import cors from 'cors';
import bodyParser from "body-parser";
dotenv.config();

const app = express();
const PORT = process.env.PORT

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to lactoMama website",
  });
});

// API routes
app.use("/api/v1", allRoutes);

app.use(cors({ origin: "*" }));
app.listen(PORT, ()=>{
  mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log(`Server is running on port ${PORT}`);
    
      console.log(`Connected to MongoDB`);
    });

  })
  
