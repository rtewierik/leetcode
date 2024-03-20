function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineLetters = [...magazine];
  const magazineMap = {};
  for (const letter of magazineLetters) {
    magazineMap[letter] = (magazineMap[letter] ?? 0) + 1;
  }
  for (const letter of [...ransomNote]) {
    if (magazineMap[letter] >= 1) {
      magazineMap[letter]--;
    } else {
      return false;
    }
  }
  return true;
};