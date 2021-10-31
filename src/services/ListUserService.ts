import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

class ListUserService {
  async execute() {
    const usersRepository = getCustomRepository(UsersRepositories);

    const user = await usersRepository.find();

    return classToPlain(user);
  }
}

export { ListUserService };
