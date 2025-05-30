import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username }});

  if (!user) {
    return res.sendStatus(403);
  }

  const match = await bcrypt.compare(password, user.password);

  if(match) {
    const token = jwt.sign({ "username": username }, process.env.JWT_SECRET_KEY!, { expiresIn: "30m" });
    return res.json({ "token": token });
  }
  else {
    return res.sendStatus(403);
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
