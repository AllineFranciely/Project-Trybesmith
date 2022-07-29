import connection from '../models/connection';
import ProductModel from '../models/products.model';
import Product from '../interfaces/products.interface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async createProduct(product: Product): Promise<Product> {
    return this.model.createProduct(product);
  }

  public async getAllProducts(): Promise<Product[]> {
    const products = await this.model.getAllProducts();
    return products;
  }
} 