import express from 'express';
import { addJob,updateJob,viewJob,applyJob } from '../controllers/job.controller.js';
import multer from 'multer';

const jobRouter = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../uploads"); // Destination folder for storing uploaded files
  },
  filename: (req, file, callback) => {
    const filename = `${file.fieldname}_${Date.now()}${file.originalname.match(/\.[0-9a-z]+$/i)[0]}`;
    callback(null, filename); // Setting the filename for the uploaded file
  }
});

jobRouter.post('/', addJob);
jobRouter.get('/',viewJob);
jobRouter.post('/apply/:jobId', applyJob);
jobRouter.put('/:jobId', updateJob);

export default jobRouter;