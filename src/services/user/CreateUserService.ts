import { hash } from "bcryptjs";
import prismaClient from "../../prisma";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    await this.emailExists(email);

    return await this.create(name, email, password);
  }

  async emailExists(email: string) {
    const emailExists = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (emailExists) {
      throw Error(`E-mail ${email} already exists`);
    }
  }

  async create(name: string, email: string, password: string) {
    return await prismaClient.user.create({
      data: {
        name,
        email,
        password: await hash(password, 8),
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }
}
