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
  var dummyHead = new ListNode(-1);
  var head = dummyHead;
  var sum = 0;
  var carry = 0;

  // keep running while at least one of these conditions are true
  // because we still want to create a new list node if even only ONE condition passes true
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
    dummyHead = dummyHead.next;
    sum = carry;
    carry = 0;
  }

  return head.next;
}
