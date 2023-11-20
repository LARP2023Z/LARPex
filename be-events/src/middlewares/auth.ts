import { NextFunction, Request, Response } from "express";
import globalMock from "../_mock/global.mock";

const authenticationValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!globalMock.authorized) throw new Error("Unauthorized");
    return next();
  } catch (error: any) {
    return res.status(401).json({ status: error.message });
  }
};

export default authenticationValidator;
