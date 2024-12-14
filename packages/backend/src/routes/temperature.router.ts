import express from "express";
import convertTemperature from "../controllers/temperature.controller";

const temperatureRouter = express.Router();

temperatureRouter.post("/", convertTemperature);

export default temperatureRouter;
