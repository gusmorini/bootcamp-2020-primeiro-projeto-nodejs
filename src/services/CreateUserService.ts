import { getRepository } from 'typeorm';
import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const userRepository = getRepository(User);

    // busca informações no banco
    const checkUserExists = await userRepository.findOne({
      where: { email },
    });

    // verifica se existe o email no banco e retorna erro
    if (checkUserExists) {
      throw new Error('E-mail address already used.');
    }

    // cria uma instância para ser salvo no banco
    const user = userRepository.create({
      name,
      email,
      password,
    });

    // salva a instância no banco
    await userRepository.save(user);

    return user;
  }
}
