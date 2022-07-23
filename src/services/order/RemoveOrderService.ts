import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}

export class RemoveOrderService {
  async execute({ order_id }: OrderRequest) {
    return await prismaClient.order.delete({
      where: {
        id: order_id,
      },
    });
  }
}
