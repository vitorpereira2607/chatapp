import express from 'express';
import MessageController from "../controllers/messageController.js";
import ProtectRoute from '../middleware/protectRoute.js';
const router = express.Router();

router.get('/:id', ProtectRoute.protect, MessageController.getMessages)
router.post('/send/:id', ProtectRoute.protect, MessageController.sendMessage)

export default router;

