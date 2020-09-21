import { Router } from "express";
import multer from "multer";
import { getRepository } from "typeorm";
import uploadConfig from "../config/upload";

import ensureSession from "../middlewares/ensureSession";
import User from "../models/User";

const userRouter = Router();
const upload = multer(uploadConfig);

import CreateUserService from "../services/CreateUserService";
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";

userRouter.get("/", async (request, response) => {
  const userRepository = getRepository(User);
  response.json(await userRepository.find());
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
  const updateAvatar = new UpdateUserAvatarService();
  const user = await updateAvatar.execute({
    user_id: request.user.id,
    avatarFileName: request.file.filename,
  });

  return response.json(user);
});

export default userRouter;
