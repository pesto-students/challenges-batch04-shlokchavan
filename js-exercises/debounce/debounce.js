function debounce(fn, timeInMs) {
  let timer;

  return function internal(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(args), timeInMs);
  };
}
export { debounce };
