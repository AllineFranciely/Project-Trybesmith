import { Pool } from 'mysql2/promise';
import { Order } from '../interfaces/products.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.connection
      .execute('SELECT * FROM Trybesmith.Orders');
    const [resultOrders] = orders;
    
    const allOrders: Array<Order> = Object.values(resultOrders).map((order) => (
      { id: order.id, userId: order.userId, productsIds: [] }
    ));
    
    const products = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    const [resultProducts] = products;
    
    Object.values(resultProducts).forEach((product) => {
      Object.values(resultOrders).forEach((order, index) => {
        if (order.id === product.orderId) {
          allOrders[index].productsIds.push(product.id);
        }
      });
    });

    return allOrders as Order[];
  }
}
