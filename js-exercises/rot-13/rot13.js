/*
 1. Parse String Arguement
 2. Replace using Regex pattern that checks all uppercase character
 3. Return a callback that takes "letter"
 4. Detect character position from Character Code
 5. Check if letter position is occuring before character N i.e 14th Character
 6. Using ternary operator to change character by adding or subtracting char position

*/

function rot13(...args) {
  return (`${args}`).replace(/[A-Z]/gi, (letter) => String.fromCharCode(letter.charCodeAt(0) + (letter < 'N' ? 13 : -13)));
}
export { rot13 };
