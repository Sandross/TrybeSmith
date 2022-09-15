import OrderModel from '../models/orderModel';
import Order from '../interfaces/orderInterface';

export default class OrderService {
  private model: OrderModel;
    
  constructor() {
    this.model = new OrderModel();
  }
    
  public getAll = async ():Promise<Order[]> => {
    const orders = await this.model.getAll();
    return orders;
  };
}