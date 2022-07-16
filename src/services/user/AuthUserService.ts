import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma";

interface AuthRequest {
  email: string;
  password: string;
}

export class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (user) {
      if (await compare(password, user.password)) {
        return {
          id: user.id,
          name: user.name,
          token: await this.token(user.id, user.name, user.email),
        };
      }
    }

    throw Error("E-mail / Password incorrect");
  }

  async token(id: string, name: string, email: string): Promise<string> {
    return sign(
      {
        name,
        email,
      },
      process.env.JWT_SECRET,
      {
        subject: id,
        expiresIn: "30d",
      }
    );
  }
}
