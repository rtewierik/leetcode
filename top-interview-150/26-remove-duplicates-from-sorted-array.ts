function removeDuplicates(nums: number[]): number {
  const length = nums.length;
  var k = length;
  var lastItemIndex = 0;
  var lastItem = nums[lastItemIndex];
  for (var i = 1; i < length; i++) {
    var item = nums[i];
    if (item == lastItem) {
      k--;
    } else {
      lastItemIndex++;
      nums[lastItemIndex] = item;
      lastItem = item;
    }
  }
  return k;
};