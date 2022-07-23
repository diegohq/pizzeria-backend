import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}

export class FinishOrderService {
  async execute({ order_id }: OrderRequest) {
    return await prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        finished: true,
      },
    });
  }
}
