/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response } from "express";
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const update = new UpdateUserAvatarService();

    const user = update.execute({
      user_id: request.user.id,
      avatarFilename: request.file!.filename,
    });

    return response.json(user);
  }
}
