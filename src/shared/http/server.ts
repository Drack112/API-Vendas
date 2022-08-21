import "reflect-metadata";
import "@shared/typeorm";

import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import routes from "./routes";
import AppError from "@shared/errors/AppError";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }

    console.log(error);

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  },
);

app.listen(3000, () => {
  console.log("Server rodando na porta 3000! 🚀");
});
