import connection from '../models/connection';
import UserModel from '../models/userModel';
import User from '../interfaces/userInterface';
import authService from './authService';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }
  
  public create = async (user: User) => {
    const newUser = await this.model.createUsers(user);
    const token = authService.generateToken(newUser);
    return { token };
  };
}