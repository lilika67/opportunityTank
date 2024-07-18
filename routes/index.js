import userRouter from './userRoute.js';
import messageRouter from '../routes/messageRoute.js';
import jobRouter from '../routes/jobRoute.js';
import express from 'express';
const allRoutes = express.Router();


allRoutes.use('/users',userRouter);
allRoutes.use('/job', jobRouter)
allRoutes.use('/message',messageRouter);

export default allRoutes;