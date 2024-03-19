/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    var toFillIndex = m + n - 1;
    var currentNums1Index = m - 1;
    for (var i = n - 1; i >= 0;) {
        if (currentNums1Index < 0 || nums2[i] >= nums1[currentNums1Index]) {
            nums1[toFillIndex] = nums2[i];
            i--;
        } else {
            nums1[toFillIndex] = nums1[currentNums1Index];
            if (toFillIndex !== currentNums1Index) {
                nums1[currentNums1Index] = 0;
            } else {
                break;
            }
            currentNums1Index--;
        }
        toFillIndex--;
    }
};