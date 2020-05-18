// given a linked list, remove the n-th node from the end of the list and return its head
// two pointer approach

// ex: Given linked list: 1 -> 2 -> 3 -> 4 -> 5, n = 2
// After removing the second node from the end, the LL becomes 1->2->3->5

// Note: Given n will always be valid

//i: LL and target node to remove
//o: new LL with target node removed
//c:
//e: n will always be valid

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var removeNthFromEnd = (head, n) => {
  let dummyHead = new ListNode(-1);
  dummyHead.next = head;
  let p1 = dummyHead;
  let p2 = dummyHead;

  // the condition should be i <= n or i < n + 1 so that the first pointer will be one node behind the target node
  for (let i = 0; i <= n; i++) {
    p1 = p1.next;
  }

  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  p2.next = p2.next.next;
  return dummyHead.next;
}
