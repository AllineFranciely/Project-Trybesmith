import { Request, Response } from 'express';
import ProductService from '../services/products.services';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public createProduct = async (req: Request, res: Response) => {
    const product = req.body;

    const response = await this.productService.createProduct(product);

    return res.status(201).json(response);
  };

  public getAllProducts = async (_req: Request, res: Response) => {
    const products = await this.productService.getAllProducts();
    res.status(200).json(products);
  };
} 