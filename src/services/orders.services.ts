import OrderModel from '../models/orders.models';
import connection from '../models/connection';

export default class OrderServices {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<object> {
    const order = await this.model.getAll();
    return order;
  }
}
