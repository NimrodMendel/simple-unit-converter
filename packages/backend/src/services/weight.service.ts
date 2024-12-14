class WeightService {
  convertToKgs(value: number) {
    return value / 2.2;
  }

  convertToLbs(value: number) {
    return value * 2.2;
  }
}

export default WeightService;