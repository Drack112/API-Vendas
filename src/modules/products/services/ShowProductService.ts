import AppError from "@shared/errors/AppError";
import Product from "../typeorm/entities/product";

import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../typeorm/repositories/ProductRepository";

interface IRequest {
  id: string;
}

class ShowProductService {
  public async execute({ id }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);
    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError("Product not found.");
    }

    return product;
  }
}

export default ShowProductService;
