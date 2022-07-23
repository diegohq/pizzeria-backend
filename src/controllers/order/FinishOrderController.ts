import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/FinishOrderService";

export class FinishOrderController {
  async handle(req: Request, res: Response) {
    const orderId = req.params.orderId as string;

    const service = new FinishOrderService();

    return res.json(await service.execute({ order_id: orderId }));
  }
}
