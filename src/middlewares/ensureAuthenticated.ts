import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }

  // dividindo o array pelo espaço e pegando apenas a 2 possição do array com [,token]
  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "43a64f828c3041de019e11500f955c85"
    ) as IPayload;

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }

  // Recuperar informações do usuário
}
