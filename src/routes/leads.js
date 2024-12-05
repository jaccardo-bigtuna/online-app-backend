import express from 'express';
import multer from 'multer';
import { queryLead, updateLead, uploadFile } from '../controllers/leadController.js';
import { authenticateToken } from '../middleware/auth.js';

export const leadRouter = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

leadRouter.use(authenticateToken);
leadRouter.get('/query', queryLead);
leadRouter.patch('/:id', updateLead);
leadRouter.post('/:id/files', upload.single('file'), uploadFile);