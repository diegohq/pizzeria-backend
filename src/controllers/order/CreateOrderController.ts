import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

export class CreateOrderController {
  async handle(req: Request, res: Response) {
    const { table, name } = req.body;

    const service = new CreateOrderService();

    return res.json(await service.execute({ table, name }));
  }
}
