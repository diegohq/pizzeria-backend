import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}

export class DetailOrderService {
  async execute({ order_id }: OrderRequest) {
    const order = await prismaClient.order.findFirst({
      where: {
        id: order_id,
      },
    });

    const items = await prismaClient.orderItem.findMany({
      where: {
        order_id,
      },
      include: {
        product: true,
      },
    });

    return {
      ...order,
      ...{
        items,
      },
    };
  }
}
