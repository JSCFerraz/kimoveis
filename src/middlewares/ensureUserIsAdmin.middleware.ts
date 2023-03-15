import { NextFunction, Request, Response } from "express";
import AppError from "../errors/app.errors";

const ensureUserIsAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const isAdmin: boolean = req.user.isAdmin;
  if (!isAdmin) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export default ensureUserIsAdminMiddleware;
