function chunkArrayInGroups(array, chunkSize) {
  if (!array.length) return [];

  const first = array.slice(0, chunkSize);
  const remaining = array.slice(chunkSize);

  return [first, ...chunkArrayInGroups(remaining, chunkSize)];
}
export {
  chunkArrayInGroups,
};
