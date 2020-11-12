function flatten(arr) {
  return [].concat(...arr);
}
/* eslint-disable max-len */
function diffArray(...args) {
  // Concatenating both arrays in one
  const groupedArray = flatten(args);

  const diff = groupedArray.filter((item) => groupedArray.indexOf(item) === groupedArray.lastIndexOf(item));
  return diff;
}

export {
  diffArray,
};
