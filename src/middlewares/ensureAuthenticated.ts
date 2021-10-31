import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  // Recebe o token
  const authToken = request.headers.authorization;

  // Valida se o token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  // Valida se o token é valido
  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(
      token,
      'a82fd95db10ff25dfad39f07372ebe37',
    ) as IPayload;

    // Recupera informações do usuário para ser usado em outras rotas
    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
