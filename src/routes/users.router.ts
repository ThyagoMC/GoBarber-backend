import { Router } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";

const userRouter = Router();

import CreateUserService from "../services/CreateUserService";

userRouter.get("/", async (request, response) => {
  try {
    const userRepository = getRepository(User);

    response.json(await userRepository.find());
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

userRouter.post("/", async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, password });

    response.json({ ...user, password: undefined });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default userRouter;
