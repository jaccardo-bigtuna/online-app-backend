import express from 'express';
import { getAccessToken } from '../controllers/authController.js';

export const authRouter = express.Router();

authRouter.post('/token', getAccessToken);