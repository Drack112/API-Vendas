import { getCustomRepository } from "typeorm";

import AppError from "@/shared/errors/AppError";

import CustomersRepository from "@/modules/customers/infra/typeorm/repositories/CustomersRepository";

interface IRequest {
  id: string;
}

class DeleteCustomerService {
  public async execute({ id }: IRequest): Promise<void> {
    const customersRepository = getCustomRepository(CustomersRepository);

    const customer = await customersRepository.findById(id);

    if (!customer) {
      throw new AppError("Customer not found.");
    }

    await customersRepository.remove(customer);
  }
}

export default DeleteCustomerService;
