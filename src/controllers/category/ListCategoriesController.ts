import { Request, Response } from "express";
import { ListCategoriesService } from "../../services/category/ListCategoriesService";

export class ListCategoriesController {
  async handle(req: Request, res: Response) {
    const listCategories = new ListCategoriesService();

    return res.json(await listCategories.execute());
  }
}
