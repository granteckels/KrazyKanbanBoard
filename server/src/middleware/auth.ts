import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  // TODO: verify the token exists and add the user data to the request object
  const authHeader = req.headers['authorization']
  if(!authHeader) {
    res.sendStatus(403);
    return;
  }

  const token = (authHeader! as string).split(' ')[1];

  if(!token) {
    res.sendStatus(403);
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY!, (err: any, user: any): void => {
    if(err) {
      res.sendStatus(403);
      return;
    }

    req.user = user as JwtPayload;
    next()
  });
};
