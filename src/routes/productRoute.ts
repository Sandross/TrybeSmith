import { Router } from 'express';
import ProductController from '../controllers/productController';

const router = Router();

const productController = new ProductController();
router.post('/products', productController.create);
router.get('/products', productController.getAll);

export default router;