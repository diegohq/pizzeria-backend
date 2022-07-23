import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

export class AddItemController {
  async handle(req: Request, res: Response) {
    const orderId = req.params.orderId;
    const { product_id, quantity } = req.body;

    const service = new AddItemService();

    return res.json(
      await service.execute({
        order_id: orderId,
        product_id,
        quantity,
      })
    );
  }
}
