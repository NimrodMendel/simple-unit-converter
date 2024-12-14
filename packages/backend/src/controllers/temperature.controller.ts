import { Request, Response } from "express";
import TemperatureService from "../services/temperature.service";

type TemperatureConvertData = {
  value: number;
  from: "Celsius" | "Fahrenheit";
  to: "Celsius" | "Fahrenheit";
};

const convertTemperature = (req: Request, res: Response) => {
  const data: TemperatureConvertData = req.body;

  const temperatureService = new TemperatureService();

  let conversionResult: number;

  switch (data.to) {
    case "Celsius":
      conversionResult = temperatureService.convertToCelsius(data.value);
      break;
    case "Fahrenheit":
      conversionResult = temperatureService.convertToFarenheit(data.value);
      break;
  }

  res.status(200).json({ conversionResult });
};

export default convertTemperature;
