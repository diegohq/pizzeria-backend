import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrderService";

export class DetailOrderController {
  async handle(req: Request, res: Response) {
    const orderId = req.params.orderId as string;

    const service = new DetailOrderService();

    return res.json(
        await service.execute({ 
            order_id: orderId
         })
    );
  }
}
