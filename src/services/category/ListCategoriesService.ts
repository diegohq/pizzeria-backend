import prismaClient from "../../prisma";

export class ListCategoriesService {
  async execute() {
    return await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }
}
