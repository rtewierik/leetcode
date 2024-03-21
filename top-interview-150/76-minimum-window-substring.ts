function getNewSolution(characterRequirements: object, index: number): object {
  return { requirements: { ...characterRequirements }, start: index, end: index };
}

function minWindow(s: string, t: string): string {
  // Parse all characters from t into a Map of required characters.
  const characterRequirements: any = {};
  for (var i = 0; i < t.length; i++) {
    const char = t.charAt(i);
    characterRequirements[char] = (characterRequirements[char] ?? 0) + 1;
  }

  // Initialize the map of solutions.
  const solutionsMap: any = {}; // char -> [{ start, end, requirements: { 'a': 2, 'b': 1 } }]
  for (const char in characterRequirements) {
    solutionsMap[char] = [];
  }

  const completedSolutions: any[] = [];
  for (var i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    // Start recording solution when new matching character comes in.
    if (char in characterRequirements) {
      const newSolution = getNewSolution(characterRequirements, i);
      for (const requiredCharacter in characterRequirements) {
        const solutions = solutionsMap[requiredCharacter];
        solutions.push(newSolution);
      }
      const solutions = solutionsMap[char] as any[];
      const len = solutions.length;
      for (var j = len - 1; j >= 0; j--) {
        const solution = solutions[j];
        if (!solution.requirements[char]) {
          continue;
        }
        solution.requirements[char]--;
        if (solution.requirements[char] == 0) {
          delete solution.requirements[char];
          if (Object.keys(solution.requirements).length == 0) {
            completedSolutions.push(solution);
          }
          solutions.splice(j, 1);
        }
        solution.end = i;
      }
    }
  }
  var minimumLength = Number.MAX_VALUE;
  var minimum: any | undefined = undefined;
  for (const solution of completedSolutions) {
    if (solution.end - solution.start < minimumLength) {
      minimumLength = solution.end - solution.start;
      minimum = solution;
    }
  }
  if (!minimum) {
    return "";
  }
  return s.substring(minimum.start, minimum.end + 1);
};

console.log('Solution!', minWindow("ADOBECODEBANC", "ABC"));