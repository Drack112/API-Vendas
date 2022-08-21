import AppError from "@shared/errors/AppError";

import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/product";
import { ProductRepository } from "../typeorm/repositories/ProductRepository";

interface IRequest {
  name: string;
  quantity: number;
  price: number;
}

class CreateProductService {
  public async execute({ name, quantity, price }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);
    const productExists = await productsRepository.findByName(name);

    if (productExists) {
      throw new AppError("There is already one product with this name.");
    }

    const product = productsRepository.create({
      name,
      quantity,
      price,
    });

    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
