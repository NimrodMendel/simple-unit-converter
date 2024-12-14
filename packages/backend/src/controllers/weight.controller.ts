import { Request, Response } from "express";
import WeightService from "../services/weight.service";

type WeightConvertData = {
  value: number;
  from: "Kg" | "Lbs";
  to: "Kg" | "Lbs";
};

const convertWeight = (req: Request, res: Response) => {
  const data: WeightConvertData = req.body;

  const weightService = new WeightService();

  let conversionResult: number;

  switch (data.to) {
    case "Lbs":
      conversionResult = weightService.convertToLbs(data.value);
      break;
    case "Kg":
      conversionResult = weightService.convertToKgs(data.value);
      break;
  }

  res.status(200).json({ conversionResult });
};

export default convertWeight;
