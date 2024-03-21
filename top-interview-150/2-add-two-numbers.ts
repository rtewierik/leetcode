/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  return addTwoNumbersRecursive(l1, l2, 0);
};

function addTwoNumbersRecursive(l1: ListNode | null, l2: ListNode | null, remainder: number) {
  if (remainder || l1 || l2) {
      const val = (l1?.val ?? 0) + (l2?.val ?? 0) + remainder;
      return new ListNode(val % 10, addTwoNumbersRecursive(l1?.next, l2?.next, val >= 10 ? 1 : 0));
  }
  return null;
}