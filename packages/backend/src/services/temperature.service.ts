class TemperatureService {
  convertToCelsius(value: number) {
    return ((value - 32) * 5) / 9;
  }

  convertToFarenheit(value: number) {
    return (value * 9) / 5 + 32;
  }
}

export default TemperatureService;
