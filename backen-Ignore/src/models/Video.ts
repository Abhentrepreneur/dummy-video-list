import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  thumbnail: { type: String, required: true },
});

export default mongoose.model('Video', VideoSchema);
