import prismaClient from "../../prisma";

interface ProductRequest {
  category_id: string;
}

export class ListByCategoryService {
  async execute({ category_id }: ProductRequest) {
    return await prismaClient.product.findMany({
      where: {
        category_id,
      },
    });
  }
}
