// your implementation
const map = (obj, func) => Object.fromEntries(
  Object.entries(obj).map(func),
);

const filter = (obj, func) => Object.fromEntries(
  Object.entries(obj).filter(func),
);

const invert = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === 'object') return false;
  }
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key]),
  );
};

const merge = (...args) => {
  let resultObject = {};
  for (const arg of args) {
    resultObject = { ...resultObject, ...arg };
  }
  return resultObject;
};

const all = (obj, func) => Object.entries(obj).every(func);
const some = (obj, func) => Object.entries(obj).some(func);

export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};
