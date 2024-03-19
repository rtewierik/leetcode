function removeDuplicatesTwo(nums: number[]): number {
  const length = nums.length;
  var k = length;
  var lastItemIndex = 0;
  var lastItem = nums[lastItemIndex];
  var numDuplicatesObserved = 1;
  for (var i = 1; i < length; i++) {
    var item = nums[i];
    if (item == lastItem) {
      if (numDuplicatesObserved < 2) {
        nums[lastItemIndex + numDuplicatesObserved] = item;
        numDuplicatesObserved++;
      } else {
        k--;
      }
    } else {
      lastItemIndex += numDuplicatesObserved;
      nums[lastItemIndex] = item;
      lastItem = item;
      numDuplicatesObserved = 1;
    }
  }
  return k;
};