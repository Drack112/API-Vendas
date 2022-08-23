import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import ForgotPasswordController from "../controllers/ForgorPasswordController";

const forgotPasswordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();

forgotPasswordRouter.post(
  "/forgot",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  forgotPasswordController.create,
);

export default forgotPasswordRouter;
