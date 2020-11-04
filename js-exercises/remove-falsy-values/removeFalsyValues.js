/*
According to MDN values such as
0, -0, null, false, NaN, undefined
are omitted as they are considered
to be False values

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
*/

function removeFalsyValues(inputArray) {
  if (!Array.isArray(inputArray)) throw new Error(`Error: Expected Array received ${typeof (inputArray)}`);
  return inputArray.filter(Boolean);
}

export {
  removeFalsyValues,
};
