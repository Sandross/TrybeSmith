import { Pool, ResultSetHeader } from 'mysql2/promise';
import Users from '../interfaces/userInterface';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createUsers(user: Users): Promise<Users> {
    const { username, classe, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return {
      id: result[0].insertId,
      username,
      classe,
      level,
      password,
    };
  }
}