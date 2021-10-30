import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }) {
    const usersRespositories = getCustomRepository(UsersRepositories);

    // Verifica se o email existe
    const user = await usersRespositories.findOne({ email });

    if (!user) {
      throw new Error('Email ou Password incorrect!');
    }

    // Verifica se a senha está correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email ou Password incorrect!');
    }

    // Gerar token
    const token = sign(
      {
        email: user.email,
      },
      'a82fd95db10ff25dfad39f07372ebe37',
      { subject: user.id, expiresIn: '1d' },
    );

    return token;
  }
}

export { AuthenticateUserService };
