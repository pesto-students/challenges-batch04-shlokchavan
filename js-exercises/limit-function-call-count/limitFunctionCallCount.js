function limitFunctionCallCount(...args) {
  let times = args[1]; // Take repetition @ index 1
  // Should return a function
  return function (...params) {
    if (times > 0) {
      // Repeat N number of times
      if (times) {
        // With Parameter then call inner function with params
        // eslint-disable-next-line no-plusplus
        if (params && --times > 0) return args[0](...params);
      }
    }
    // Return null to limit
    return null;
  };
}

export { limitFunctionCallCount };
