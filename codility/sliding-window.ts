// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const MAX_ALLOWED_DIGITS = 2

const countOccurrences = (str: number): Record<string, number> => {
  const digits: Record<string, number> = {}
  str.toString().split('').forEach(c => {
    if (c in digits) {
      digits[c]++
    } else {
      digits[c] = 1
    }
  })
  return digits
}

function solution(A: number[]): number {
  let left = 0
  let right = 0
  let maxLength = 0
  let currentDigits = {}
  let itemIntegrated = false
  for (let i = 0; i < A.length; i++) {
    const digits = countOccurrences(A[i])
    // No match with previous segments can be made.
    if (Object.keys(digits).length > 2) {
      // console.log('No match with previous segments.');
      left = i + 1
      right = i + 1
      continue
    }
    const union: Record<string, number> = { ...currentDigits }
    Object.keys(digits).forEach(k => {
      const count = digits[k]
      if (k in union) {
        union[k] += count
      } else {
        union[k] = count
      }
    })
    // console.log(`Union (${Object.keys(union).length}): ${JSON.stringify(union)}`);
    // The new number is part of the current segment.
    if (Object.keys(union).length <= MAX_ALLOWED_DIGITS) {
      // console.log('New number part of existing segment.');
      currentDigits = union
      right = i
      maxLength = Math.max(maxLength, right - left + 1)
      continue
    }
    // Needs to be computed in while loop until element at i can be integrated into solution.
    while (left < right) {
      const leftDigits = countOccurrences(A[left])
      const difference = union
      Object.keys(leftDigits).forEach(k => {
        const count = leftDigits[k]
        difference[k] -= count
        // Should always be >= 0.
        if (difference[k] <= 0) {
          delete difference[k]
        }
      })
      // console.log(`Difference (${Object.keys(difference).length}): ${JSON.stringify(difference)}`);
      if (Object.keys(difference).length <= MAX_ALLOWED_DIGITS) {
        // console.log(`Excluded element at ${left}! New boundaries [${left + 1}, ${i}]`);
        left++ // Exclude element at left from the solution.
        right = i
        maxLength = Math.max(maxLength, right - left + 1)
        currentDigits = difference
        itemIntegrated = true
        break
      }
    }
    if (!itemIntegrated) {
      // Element at i could not be integrated, new solution starts at i.
      // console.log(`New solution starts at ${i}`);
      left = i
      right = i
      currentDigits = digits
    }
    itemIntegrated = false
  }
  return maxLength
}
