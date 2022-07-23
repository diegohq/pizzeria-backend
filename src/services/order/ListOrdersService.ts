import prismaClient from "../../prisma";

export class ListOrdersService {
  async execute() {
    return await prismaClient.order.findMany({
      where: {
        draft: false,
        finished: false,
      },
    });
  }
}
