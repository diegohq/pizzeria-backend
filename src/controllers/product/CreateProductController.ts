import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const createProductService = new CreateProductService();

    const {name, price, description, category_id} = req.body;

    if (!req.file) {
      throw new Error("Banner is required");
    }

    const { filename: banner } = req.file;

    return res.json(await createProductService.execute({
        name,
        price,
        description,
        banner,
        category_id,
    }));
  }
}
