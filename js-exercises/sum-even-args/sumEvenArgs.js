const isEven = (num) => num % 2 === 0;

const sumEvenArgs = (...args) => {
  let sum = 0;
  if (args) {
    for (const num of args) {
      // Add to sum if number is even
      if (isEven(num)) sum += num;
    }
  }
  return sum;
};

export { sumEvenArgs };
