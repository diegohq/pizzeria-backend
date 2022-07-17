import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string;
}

export class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    if (!name || name === "") {
      throw new Error("Name invalid");
    }

    return await prismaClient.category.create({
      data: {
        name,
      },
    });
  }
}
