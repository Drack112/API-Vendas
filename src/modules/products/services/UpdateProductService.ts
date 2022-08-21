import AppError from "@shared/errors/AppError";

import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/product";
import { ProductRepository } from "../typeorm/repositories/ProductRepository";

interface IRequest {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

class UpdateProductService {
  public async execute({
    id,
    name,
    price,
    quantity,
  }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);
    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError("Product not found.");
    }

    const productExists = await productsRepository.findByName(name);

    if (productExists) {
      throw new AppError("There is already one product with this name.");
    }

    product.name = name;
    product.price = price;
    product.quantity = quantity;

    await productsRepository.save(product);

    return product;
  }
}

export default UpdateProductService;
