// merge two sorted linked lists and return it as a new list
// the new list should be made by splicing together the nodes of the first two lists

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = (l1, l2) => {
  let newList = new ListNode(-1);
  let head = newList;

  while (!l1 && !l2) {
    if (l1.val < l2.val) {
      newList.next = l1.val;
      l1 = l1.next;
    } else {
      newList.next = l2.val;
      l2 = l2.next;
    }

    // update newList because it acts as a pointer
    newList = newList.next;
  }

  while (!l1) {
    newList.next = l1;
    l1 = l1.next;
  }

  while (!l2) {
    newList.next = l2;
    l2 = l2.next;
  }

  return head.next;
}
