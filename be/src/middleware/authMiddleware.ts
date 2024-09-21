import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';


const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, SECRET_KEY, (err) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }
    next();
  });
};
