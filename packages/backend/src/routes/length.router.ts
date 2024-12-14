import express from "express";
import convertLength from "../controllers/length.controller";

const lengthRouter = express.Router();

lengthRouter.post("/", convertLength);

export default lengthRouter;
