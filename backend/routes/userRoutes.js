import express from 'express'
import protectRoute from '../middleware/protectRoute.js';
import UserController from '../controllers/userController.js';

const router = express.Router();

router.get('/', protectRoute.protect, UserController.getUsers);

export default router;
