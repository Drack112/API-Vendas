import authConfig from "@config/auth";
import AppError from "@shared/errors/AppError";

import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT token is missing.");
  }

  // Bearer 740127015761056056jfd
  const [, token] = authHeader.split(" ");

  try {
    const decodeToken = verify(token, authConfig.jwt.secret);
    console.log(decodeToken);

    const { sub } = decodeToken as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError("JWT Token is invalid!");
  }
}
