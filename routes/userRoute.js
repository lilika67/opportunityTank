import express from "express";
import {
  SignIn,
  SignUp,
  getUsers,
} from "../controllers/userController.js";
const userRoute = express.Router();
userRoute.get('/', getUsers);
userRoute.post("/signin", SignIn);
userRoute.post("/signup", SignUp);


export default userRoute;