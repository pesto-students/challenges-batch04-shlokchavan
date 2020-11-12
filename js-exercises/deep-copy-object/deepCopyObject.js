const deepCopyObject = (arrayToCopy) => {
  if (typeof arrayToCopy !== 'object' || arrayToCopy === null) return arrayToCopy;
  const copiedObj = Array.isArray(arrayToCopy) ? [] : {};
  for (const key in arrayToCopy) {
    if (Object.hasOwnProperty.call(arrayToCopy, key)) {
      const copyItem = arrayToCopy[key];
      copiedObj[key] = deepCopyObject(copyItem);
    }
  }

  return copiedObj;
};
export { deepCopyObject };
