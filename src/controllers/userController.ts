import { Request, Response } from 'express';
import UserService from '../services/userService';
// import AuthService from '../services/authService';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const userInfo = req.body;
    const newUser = await this.userService.create(userInfo);
    // const token = AuthService.generateToken(newUser);
    res.status(201).json(newUser);
  };
}