import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '@shared/errors/AppError';
import authConfig from '@config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeaders = request.headers.authorization;

  if (!authHeaders) {
    throw new AppError('Token is missing', 401);
  }

  const [, token] = authHeaders.split(' ');

  try {
    const { secret } = authConfig.jwt;
    const decoded = verify(token, secret);
    const { sub } = decoded as TokenPayload;
    request.user = {
      id: sub,
    };
    next();
  } catch {
    throw new AppError('Invalid token');
  }
}
