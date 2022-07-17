import prismaClient from "../../prisma";

export class DetailUserService {
  async execute(id: string) {
    return prismaClient.user.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }
}
