import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";

export class RemoveOrderController {
  async handle(req: Request, res: Response) {
    const orderId = req.params.orderId as string;

    const service = new RemoveOrderService();

    return res.json(await service.execute({ order_id: orderId }));
  }
}
