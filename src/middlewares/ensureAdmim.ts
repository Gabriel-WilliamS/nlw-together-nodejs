import { Request, Response, NextFunction } from "express";

export function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Verificar se usuaio é admim

  const admim = true;

  if (admim) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized "
  });
}
