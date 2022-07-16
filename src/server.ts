import express, { Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(router);
app.use(cors());
app.use((err: Error, req: Request, res: Response, next) => {
  console.error(err);

  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    message: "Internal server error",
  });
});

app.listen(3000, () => {
  console.log("Server up");
});
