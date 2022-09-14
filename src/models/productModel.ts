import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/productInterface';
import connection from './connection';

export default class ProductModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES(?, ?)',
      [name, amount],
    );
    return { id: insertId, ...product };
  }

  public async getAll(): Promise<Product[]> {
    const [products] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return products as Product[];
  }
}