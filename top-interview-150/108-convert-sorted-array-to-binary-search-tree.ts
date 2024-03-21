/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function createBST(nums: number[], l: number, r: number) {
  if (l > r) {
      return null;
  }
  const mid = l + Math.floor((r - l) / 2);
  const left = createBST(nums, l, mid - 1);
  const right = createBST(nums, mid + 1, r);
  return new TreeNode(nums[mid], left, right);
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  return createBST(nums, 0, nums.length - 1);
};