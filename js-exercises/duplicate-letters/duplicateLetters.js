function duplicateLetters(...args) {
  const characterMap = new Map();
  for (const char of args[0]) {
    // Check if Map Already has Character
    if (!characterMap.has(char)) {
      characterMap.set(char, 1);
    } else {
      // Add Counter If Character Already Exist
      let count = characterMap.get(char);
      characterMap.set(char, (count += 1));
    }
  }
  // Check for Maximum Occurence of Character
  const maxCount = Math.max(...characterMap.values());

  // If All Character Only Occur Once
  if (maxCount === 1) return false;

  // If Any Character that has maximum occurence
  // and occured more than 1 times
  return maxCount;
}

export { duplicateLetters };
