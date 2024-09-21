import * as express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
import videoRoutes from './routes/videoRoutes';
import dotenv from 'dotenv';
dotenv.config();
const app = express.default();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://sriabhishek24:oTc7Zsw7JW43FYmv@cluster0.yveoc.mongodb.net/')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/videos', videoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
