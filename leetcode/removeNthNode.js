// given a linked list, remove the n-th node from the end of the list and return its head
// two pointer approach

var removeNthFromEnd = (head, n) => {
  var dummyHead = new ListNode(-1);
  dummyHead.next = head;
  var p1 = dummyHead;
  var p2 = dummyHead;

  // move the first pointer to the node right before n + 1
  for (var i = 0; i < n + 1; i++) {
    p1 = p1.next;
  }

  // while p1 isn't null
  // move p2 UNTIL p1 is null, which should also place p2
  // at the node right before the nth node
  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  // replace the current node's next pointer to the nth node's next pointer
  p2.next = p2.next.next;
  return dummyHead.next;
}
