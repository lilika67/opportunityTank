import userRouter from './userRoute.js';
import messageRouter from '../routes/messageRoute.js';
import testimonialRouter from '../routes/testimonialRoute.js';
import express from 'express';
const allRoutes = express.Router();


allRoutes.use('/users',userRouter);
allRoutes.use('/testimony', testimonialRouter)
allRoutes.use('/message',messageRouter);

export default allRoutes;