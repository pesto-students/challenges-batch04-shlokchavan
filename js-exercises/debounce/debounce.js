function debounce(fn, timeInMs) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, ...args), timeInMs);
  };
}
export { debounce };
