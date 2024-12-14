import { Request, Response } from "express";
import LengthService from "../services/length.service";

type LengthConvertData = {
  value: number;
  from: "Km" | "Miles";
  to: "Km" | "Miles";
};

const convertLength = (req: Request, res: Response) => {
  const data: LengthConvertData = req.body;

  const lengthService = new LengthService();

  let conversionResult: number;

  switch (data.to) {
    case "Km":
      conversionResult = lengthService.convertToKm(data.value);
      break;
    case "Miles":
      conversionResult = lengthService.convertToMiles(data.value);
      break;
  }

  res.status(200).json({ conversionResult });
};

export default convertLength;
