function cacheFunction(functionName) {
  const cache = {};
  return (...args) => {
    // Taking only 1 Arguement
    const num = args[0];
    // Check if exist in cache
    if (num in cache) {
      // Return from Cache
      return cache[num];
    }

    // Process function in this case sumFibs
    /* eslint-disable */
    return (cache[num] = functionName(num));
  };
}

// Check if number is Odd
const isOdd = (num) => num % 2 !== 0;

const sumFibs = cacheFunction((num) => {
  // Bruteforce Approch
  let previous = 0;
  let current = 1;
  let count = 0;

  while (current <= num) {
    // Swapping
    [current, previous] = [previous + current, current];

    // Add if number is odd
    if (isOdd(previous)) {
      count += previous;
    }
  }
  return count;
});

export { sumFibs, cacheFunction };
