const memory = {
  1: 1,
  2: 2
}

function climbStairs(n: number): number {
const memoizedResult = memory[n];
if (memoizedResult) {
  return memoizedResult;
}
const calculatedResult = climbStairs(n - 1) + climbStairs(n - 2);
memory[n] = calculatedResult;
return calculatedResult;
};

