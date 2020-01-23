// given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node
// Note that the intersection is defined based on reference, not value.
// That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting

// Example
// Input: L1: 1 -> 2 -> 3 -> 4 -> 5 & L2: 5 -> 4 -> 3 -> 2 -> 1
// Output: 3
// Example 2:
// Input: L1: 1 -> 2 -> 3 -> 4 -> 5 & L2: 5 -> 4 -> 1 -> 3 -> 2
// Output: Null

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var intersection = function (l1, l2) {
  var storage = [];

  while (l1) {
    storage.push(l1);
    l1 = l1.next;
  }

  while (l2) {
    if (storage.includes(l2)) {
      return l2;
    }
    l2 = l2.next;
  }

  return null;
}
