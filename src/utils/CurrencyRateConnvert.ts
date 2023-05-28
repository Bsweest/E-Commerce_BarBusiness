const rate = 23.4825;

const CurrentRateConvert = (input: number): string => {
  return Math.round(input / rate).toString();
};

export default CurrentRateConvert;
