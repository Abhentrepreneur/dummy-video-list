import * as express from 'express';
import { uploadVideo, getVideos } from '../controllers/videoController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/upload', authMiddleware, uploadVideo);
router.get('/', getVideos);

export default router;
