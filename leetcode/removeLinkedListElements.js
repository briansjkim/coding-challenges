/**
 * Remove all elements from a linked list of integers that have value val
 *
 * Ex:
 * I: 1->2->6->3->4->5->6, val = 6
 * O: 1 -> 2 -> 3-> 4 -> 5
 *
 * i: LL and target value to remove
 * O: LL without target value
 * c:
 * e:
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var removeElements = function (head, val) {
  if (!head) { return null; }

  let p1 = head;
  let p2 = head.next;

  while (p2) {
    if (p2.val === val) {
      p1.next = p2.next;
    } else {
      p1 = p2;
    }
    p2 = p2.next;
  }

  if (head.val === val) { return head.next; }
  return head;
}
