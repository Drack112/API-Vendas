import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";

import multer from "multer";
import uploadConfig from "@config/upload";

import UserController from "../controllers/UserController";
import UserAvatarController from "../controllers/UserAvatarController";

import isAuthenticated from "../middlewares/isAuthenticated";

const usersRouter = Router();
const usersController = new UserController();
const usersAvatarController = new UserAvatarController();

const upload = multer(uploadConfig);

usersRouter.get("/", isAuthenticated, usersController.index);

usersRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

usersRouter.patch(
  "/avatar",
  isAuthenticated,
  upload.single("avatar"),
  usersAvatarController.update,
);

export default usersRouter;
