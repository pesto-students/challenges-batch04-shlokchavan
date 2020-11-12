// import { isString} from "util";
/*
    1. Check type of paramter >> We need string only
    2. Splitting the string into array items
    3. Patch string First Word with first character of last word being uppercase and period.
    4. If Parameters are invalid throw error > number, array, object, null;
*/
function abbreviateString(str) {
  if (typeof str === 'string') {
    const stringArray = str.split(' ');
    const convertedString = `${stringArray[0]} ${stringArray[stringArray.length - 1][0].toUpperCase()}.`;
    return convertedString;
  }
  throw new Error('Invalid parameters please provide string');
}

export { abbreviateString };
