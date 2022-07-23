import prismaClient from "../../prisma";

interface OrderRequest {
  table: number;
  name: string;
}

export class CreateOrderService {
  async execute({ table, name }: OrderRequest) {
    if (await this.alreadyExists(table)) {
      throw new Error(`Table ${table} is already opened and not finished`);
    }

    return await prismaClient.order.create({
      data: {
        table,
        name,
      },
    });
  }

  async alreadyExists(table: number) {
    const order = await prismaClient.order.findFirst({
      where: {
        table,
        finished: false,
      },
    });

    return order ? true : false;
  }
}
