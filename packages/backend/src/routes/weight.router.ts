import express from "express";
import convertWeight from "../controllers/weight.controller";

const weightRouter = express.Router();

weightRouter.post("/", convertWeight);

export default weightRouter;
