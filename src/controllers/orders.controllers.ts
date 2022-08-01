import { Request, Response } from 'express';
import OrderServices from '../services/orders.services';

class OrderController {
  constructor(private orderServices = new OrderServices()) { }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderServices.getAll();
    return res.status(200).json(orders);
  };
}

export default OrderController;