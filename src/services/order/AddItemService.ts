import prismaClient from "../../prisma";

interface ItemRequest {
  order_id: string;
  product_id: string;
  quantity: number;
}

export class AddItemService {
  async execute({order_id, product_id, quantity}: ItemRequest) {
    return await prismaClient.orderItem.create({
        data: {
            order_id,
            product_id,
            quantity
        }
    });
  }
}
