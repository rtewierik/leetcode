"use strict";

function generateNewSolution(startIndex, B) {
    return { startIndex, endIndex: startIndex, requirements: new Set(B) }
}

function temp(A, B) {
    // Edge case

    

    // m = len(A)
    // n = len(B)

    var completedSolutions = []
    var requiredCharacters = new Set(B);
    var incompleteSolutions = {}; // char -> {}

    // O(n)
    for (const character of B) {
        incompleteSolutions[character] = [];
    }
    
    // O(m^2)
    for (var i = 0; i < A.length; i++) {
        var character = A[i];
        if (requiredCharacters.has(character)) {
            // Generate a new solution and add it to incompleteSolutions.
            var newSolution = generateNewSolution(B, i);

            // O(n)
            for (const character of B) {
                var solutions = incompleteSolutions[character];
                solutions.push(newSolution);
            }
            // Solution update.
            var solutions = incompleteSolutions[character];

            // A = [A, A, A, A, A, A, B]  B = [A, B]
            // O(m)
            for (var j = solution.length - 1; j >= 0; j--) {
                var solution = solutions[j];
                solution.endIndex = i;
                solution.requirements.delete(character);
                // Complete solution found
                if (solutions.requirements.length === 0) {
                    completedSolutions.push(solution);
                }
            }
            incompleteSolutions[character].clear();
        }
    }
    var minimumLength = Number.MAX_VALUE;

    // O(m)
    for (const solution of completedSolutions) {
        var length = solution.endIndex - solution.startIndex;
        if (length < minimumLength) {
            minimumLength = length;
        }
    }
    return minimumLength;
}