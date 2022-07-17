import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const service = new CreateCategoryService();

    return res.json(await service.execute(req.body));
  }
}
