import { getRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import authConfig from "../config/auth";

import AppError from "../errors/AppError";

import User from "../models/User";

interface RequestDTO {
  email: string;
  password: string;
}

interface Response {
  user: Omit<User, "password">;
  token: string;
}

class CreateSessionService {
  public async execute({ email, password }: RequestDTO): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new AppError("Incorrect email or password", 401);
    }

    const passwordMatched = await compare(password, user.password);
    if (!passwordMatched) {
      throw new AppError("Incorrect email or password", 401);
    }

    const {
      jwt: { secret, expiresIn },
    } = authConfig;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    const result = { user: { ...user, password: undefined }, token };
    return result;
  }
}

export default CreateSessionService;
