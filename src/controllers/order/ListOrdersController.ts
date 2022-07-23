import { Request, Response } from "express";
import { ListOrdersService } from "../../services/order/ListOrdersService";

export class ListOrdersController {
  async handle(req: Request, res: Response) {
    const service = new ListOrdersService();

    return res.json(await service.execute());
  }
}
