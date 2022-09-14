import ProductModel from '../models/productModel';
import Product from '../interfaces/productInterface';

export default class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }
  
  public async create(product: Product): Promise<Product> { 
    const newProduct = await this.model.create(product);
    return newProduct;
  }
}