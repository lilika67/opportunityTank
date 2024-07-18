import express from 'express';
import { addTestimony } from '../controllers/testimonialController.js';

const testimonialRouter = express.Router();

testimonialRouter.post('/', addTestimony);

export default testimonialRouter;