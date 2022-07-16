import { Request, response, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const service = new CreateUserService();

    return res.json(
      await service.execute({
        name,
        email,
        password,
      })
    );
  }
}

export { CreateUserController };
