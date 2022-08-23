import AppError from "@shared/errors/AppError";

import { getCustomRepository } from "typeorm";

import UsersRepository from "../typeorm/repositories/UserRepository";
import UserTokensRepository from "../typeorm/repositories/UserTokensRepository";

import EtherealMail from "@config/EtherealMail";

interface IRequest {
  email: string;
}

class SendForgotPasswordEmailService {
  public async execute({ email }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);
    const usersTokenRepository = getCustomRepository(UserTokensRepository);

    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("User does not exist.");
    }

    const token = await usersTokenRepository.generate(user.id);
    //console.log(token);

    await EtherealMail.sendMail({
      to: email,
      body: `Solicitação de redefinição de senha recebida: ${token.token}`,
    });
  }
}

export default SendForgotPasswordEmailService;
