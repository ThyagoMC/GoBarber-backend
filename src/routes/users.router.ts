import { Router } from "express";
import multer from "multer";
import { getRepository } from "typeorm";
import uploadConfig from "../config/upload";

import ensureSession from "../middlewares/ensureSession";
import User from "../models/User";

const userRouter = Router();
const upload = multer(uploadConfig);

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

userRouter.patch("/avatar", ensureSession, upload.single("avatar"), async (request, response) => {
  return response.json({ ok: true });
});

export default userRouter;
