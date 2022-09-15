import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../interfaces/userInterface';

dotenv.config();
const secretJWT = process.env.JWT_SECRET || 'senhasupersecreta';

const authService = {
  generateToken: (user: User) => {
    const token = jwt.sign({ id: user.id }, secretJWT, { expiresIn: '1d', algorithm: 'HS256' });
    return token;
  },
};

export default authService;