function majorityElement(nums: number[]): number {
  var count = 0;
  var majorityElement = 0;
  for (const num of nums) {
      if (count == 0) {
          majorityElement = num;
      }
      if (majorityElement == num) {
          count++;
      }
      else {
          count--;
      }
  }
  return majorityElement;
};