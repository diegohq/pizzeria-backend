import prismaClient from "../../prisma";

interface ItemRequest {
  item_id: string;
}

export class RemoveItemService {
  async execute({ item_id }: ItemRequest) {
    return await prismaClient.orderItem.delete({
      where: {
        id: item_id,
      },
    });
  }
}
