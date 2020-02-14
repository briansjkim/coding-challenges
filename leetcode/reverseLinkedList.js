// Reverse a singly linked list.

/*
Example:
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

// Follow up:
// A linked list can be reversed either iteratively or recursively. Could you implement both?

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// iterative solution
var reverseList = function (head) {
  if (!head) { return null; }
  var current = head;
  var prev = null;
  var temp;

  while (current) {
    temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return prev;
}
