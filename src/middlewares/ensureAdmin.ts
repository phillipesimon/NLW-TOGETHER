// Middleware para verificar se o usuário é admin
import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  // Pegando o id q foi recuperado no ensureAuthenticated
  const { user_id } = request;

  const usersRepositories = getCustomRepository(UsersRepositories);

  // Verifica se o usuário é admin
  const { admin } = await usersRepositories.findOne(user_id);

  // Se admin, pode entrar no controller
  if (admin) {
    return next();
  }

  // Senão, não pode entrar no controller
  return response.status(401).json({
    error: 'Unauthorized',
  });
}
