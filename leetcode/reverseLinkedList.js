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
  if (!head || !head.next) { return head; }
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

var list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);
// console.log(reverseList(list));

var list2 = new ListNode(5);
list2.next = new ListNode(4);
list2.next.next = new ListNode(3);
list2.next.next.next = new ListNode(2);
list2.next.next.next.next = new ListNode(1);
// console.log(reverseList(list2));

// recursive solution
var reverseList = function (head) {
  if (!head || !head.next) { return head; }

  var reversedHead = reverseList(head.next);

  var newLastEl = head.next;
  if (newLastEl) { newLastEl.next = head; }

  head.next = null;

  return reversedHead;
}

var list3 = new ListNode(1);
list3.next = new ListNode(2);
list3.next.next = new ListNode(3);
list3.next.next.next = new ListNode(4);
list3.next.next.next.next = new ListNode(5);
// console.log(reverseList(list3));
