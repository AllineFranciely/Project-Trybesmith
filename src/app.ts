import express from 'express';
import 'express-async-errors';
import ProductsRoutes from './routes/products.route';

const app = express();

app.use(express.json());

app.use(ProductsRoutes);

export default app;
