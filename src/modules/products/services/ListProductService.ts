import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/product";
import { ProductRepository } from "../typeorm/repositories/ProductRepository";

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository);
    const products = await productsRepository.find();

    return products;
  }
}

export default ListProductService;
