import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

export class DetailUserController {
  async handle(req: Request, res: Response) {
    const service = new DetailUserService();

    return res.json(await service.execute(req.user_id));
  }
}
