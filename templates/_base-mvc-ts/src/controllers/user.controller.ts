import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    next(error); // Pass to global error handler
  }
};
