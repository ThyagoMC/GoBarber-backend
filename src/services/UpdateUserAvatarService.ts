import { getRepository } from "typeorm";
import User from "../models/User";
import path from "path";
import fs from "fs";

import uploadConfig from "../config/upload";
import AppError from "../errors/AppError";

interface RequestDTO {
  user_id: string;
  avatarFileName: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFileName }: RequestDTO): Promise<User> {
    const userRepositoty = getRepository(User);

    const user = await userRepositoty.findOne(user_id);

    if (!user) {
      throw new AppError("Only authenticated users can change avatar", 401);
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);

      try {
        const userFileAvatarExists = await fs.promises.stat(userAvatarFilePath);
        if (userFileAvatarExists) {
          await fs.promises.unlink(userAvatarFilePath);
        }
      } catch (error) {}
    }

    user.avatar = avatarFileName;

    await userRepositoty.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
