// Middleware para verificar se o usuário é admin
import { Request, Response, NextFunction } from 'express';

export function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  // Verifica se o usuário é admin
  const admin = false;

  // Se admin, pode entrar no controller
  if (admin) {
    return next();
  }

  // Senão, não pode entrar no controller
  return response.status(401).json({
    error: 'Unauthorized',
  });
}
