import { Pool } from 'mysql2/promise';
import Order from '../interfaces/orderInterface';
import connection from './connection';

export default class OrderModel {
  public connection: Pool;
    
  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const [orders] = await this.connection.execute(
      `SELECT ord.id AS id, ord.userId AS userId, JSON_ARRAYAGG(prod.id) AS productsIds
      FROM Trybesmith.Orders as ord
      INNER JOIN Trybesmith.Products as prod
      ON ord.id = prod.orderId
      GROUP BY ord.id
      ORDER BY ord.userId ASC`,
    );
    return orders as Order[];
  }
}