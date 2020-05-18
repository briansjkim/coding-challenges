// you are given two non-empty linked lists representing two non-negative integers
// the digits are stored in REVERSE order and each of their nodes contain a single digit
// add the two numbers and return it as a linked list
// you may assume the two numbers don't contain any leading zero, except the number 0 itself

/**
 * Example:
 * Input : (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 645 = 807
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = (l1, l2) => {
  // create a new LL
  let dummyHead = new ListNode(-1);
  // set a pointer at the new LL's head
  // this is what we'll be using to return at the end while the LL continues to grow
  let newHead = dummyHead;
  let sum = 0;
  let carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    }

    dummyHead.next = new ListNode(sum);
    dummyHead = dummyHead;
    sum = carry;
    carry = 0;
  }

  return newHead.next;
}
