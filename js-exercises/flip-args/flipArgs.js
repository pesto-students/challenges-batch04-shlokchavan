function flipArgs() {
  // Parse arguements if available
  return (...args) => {
    //   Create Array from Arguement
    const series = Array.from(args);
    // Reverse the order
    return series.reverse();
  };
}

const flipped = flipArgs(() => {});

export { flipped };
