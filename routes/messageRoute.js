import express from 'express';
import  {sendMessage, deleteMessages, getMessages} from '../controllers/messageController.js';

const messageRouter = express.Router();

messageRouter.post('/', sendMessage);

messageRouter.get('/', getMessages);

export default messageRouter;

