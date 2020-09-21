import { Router } from "express";

const userRouter = Router();

import CreateUserService from "../services/CreateUserService";

userRouter.post("/", async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, password });

    response.json(user);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default userRouter;
