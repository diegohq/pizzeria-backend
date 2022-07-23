import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";

export class SendOrderController {
  async handle(req: Request, res: Response) {
    const orderId = req.params.orderId as string;

    const service = new SendOrderService();

    return res.json(
        await service.execute({ order_id: orderId })
    );
  }
}
