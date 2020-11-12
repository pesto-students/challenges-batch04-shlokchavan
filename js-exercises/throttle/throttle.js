function throttle(fn, timeInMs) {
  let isThrottling;
  return (...args) => {
    if (!isThrottling) {
      fn.apply(this, args);
      isThrottling = true;
      // eslint-disable-next-line no-return-assign
      setTimeout(() => (isThrottling = false), timeInMs);
    }
  };
}
export { throttle };
