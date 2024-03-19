function removeElement(nums: number[], val: number): number {
  var k = nums.length;
  for (var i = k - 1; i >= 0; i--) {
    if (nums[i] == val && k > 0) {
      [nums[k - 1], nums[i]] = [nums[i], nums[k - 1]];
      k--;
    }
  }
  return k;
};