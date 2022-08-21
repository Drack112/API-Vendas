import { Request, Response, Router } from "express";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Hello Dev!" });
});

export default routes;
