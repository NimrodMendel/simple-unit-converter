class LengthService {
  convertToMiles(value: number) {
    return value / 1.609;
  }

  convertToKm(value: number) {
    return value * 1.609;
  }
}

export default LengthService;
