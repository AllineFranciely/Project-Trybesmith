import { Router } from 'express';

import ProductController from '../controllers/products.controller';

const router = Router();

const productController = new ProductController();

router.post('/products', productController.createProduct);

export default router;