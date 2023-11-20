import { NextFunction, Request, Response } from "express";
import globalMock from "../_mock/global.mock";

const authenticationValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const authHeader = req.get("authorization");
    // if (!authHeader) throw new Error("Authorization header missing");
    // const token = authHeader.split(" ")[1];

    // jwt verification...

    if (!globalMock.authorized) throw new Error("Unauthorized");
    return next();
  } catch (error: any) {
    return res.status(401).json({ status: error.message });
  }
};

export default authenticationValidator;

interface SearchFunc {
  adsds(source: string, subString: string): boolean;
  adsds2(source: string, subString: string): boolean;
}
