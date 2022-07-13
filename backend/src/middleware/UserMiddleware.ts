import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

function verifyToken(request: Request, response: Response, next: NextFunction) {
  const token = request.headers.authorization;
  console.log(token);
  jwt.verify(token, "123456", function (err) {
    return next();
    if (err) {
      return response.status(401).json({ message: `${err}` });
    }
  });
}

export default verifyToken;
