import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

export class AuthUserController {
  async handle(req: Request, res: Response) {
    const service = new AuthUserService();

    return res.json(await service.execute(req.body));
  }
}
