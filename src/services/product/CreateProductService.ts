import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

export class CreateProductService {
  async execute({
    name,
    price,
    description,
    banner,
    category_id,
  }: ProductRequest) {
    return prismaClient.product.create({
        data: {
            name,
            price: parseFloat(price),
            description,
            banner,
            category_id,
          }
    });
  }
}
