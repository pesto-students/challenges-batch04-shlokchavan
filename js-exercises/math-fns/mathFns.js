// You can use the function from the `Math` module.
const power = (baseNumber, exponent) => Number(baseNumber ** exponent);
const round = (number) => Number(number.toFixed(0));

const sqrt = (baseNumber) => {
  let high = baseNumber;
  let low = 1;
  while (high - low > 0) {
    high = (high + low) / 2;
    low = baseNumber / high;
  }
  return round(high);
};

// Don't change the exported names.
export { sqrt, power, round };
