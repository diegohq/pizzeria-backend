import { Request, Response } from "express";
import { RemoveItemService } from "../../services/order/RemoveItemService";

export class RemoveItemController {
  async handle(req: Request, res: Response) {
    const item_id = req.params.itemId as string;

    const service = new RemoveItemService();
    return res.json(
      await service.execute({
        item_id,
      })
    );
  }
}
