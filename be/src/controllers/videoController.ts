import { Request, Response } from 'express';
import Video from '../models/video';

export const uploadVideo = async (req: Request, res: Response) => {
  const { title, link, thumbnail } = req.body;

  try {
    const newVideo = new Video({ title, link, thumbnail });
    await newVideo.save();
    res.status(201).json({ message: 'Video uploaded successfully', video: newVideo });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading video', error });
  }
};

export const getVideos = async (req: Request, res: Response) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving videos', error });
  }
};
