import { Router } from "express";

import productsRouter from "@modules/products/routes/products.routes";
import usersRouter from "@modules/users/routes/users.routes";
import sessionsRouter from "@modules/users/routes/sessions.routes";
import forgotPasswordRouter from "@modules/users/routes/password.routes";

const routes = Router();

routes.use("/products", productsRouter);
routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/password", forgotPasswordRouter);

export default routes;
