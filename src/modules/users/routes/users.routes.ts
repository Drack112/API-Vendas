import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import UserController from "../controllers/UserController";
import isAuthenticated from "../middlewares/isAuthenticated";

const usersRouter = Router();
const usersController = new UserController();

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
export default usersRouter;
