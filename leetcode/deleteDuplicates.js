// given a sorted linked list, delete all duplicates such that each element appear only once

/**
 * Ex 1:
 * I: 1 -> 1 -> 2
 * O: 1 -> 2
 *
 * Ex 2:
 * I: 1 -> 1 -> 2 -> 3 -> 3
 * O: 1 -> 2 -> 3
 *
 * i: LL with duplicates
 * o: LL w/o duplicates
 * c:
 * e:
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var deleteDuplicates = function (head) {
  // create a pointer so that we can iterate through and modify the given list
  let list = head;

  while (list) {
    if (list.next && list.val === list.next.val) {
      list.next = list.next.next;
    } else {
      list = list.next;
    }
  }

  return head;
}
