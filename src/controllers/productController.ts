import { Request, Response } from 'express';
import ProductService from '../services/productService';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public create = async (req: Request, res: Response) => {
    const productInfo = req.body;
    const newProduct = await this.productService.create(productInfo);
    res.status(201).json(newProduct);
  };
}