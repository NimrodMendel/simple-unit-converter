import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import { lengthRouter, temperatureRouter, weightRouter } from "./routes";
import cors from "cors";

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use("/weight", weightRouter);
app.use("/length", lengthRouter);
app.use("/temperature", temperatureRouter);

const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
