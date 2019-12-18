// merge two sorted linked lists and return it as a new list
// the new list should be made by splicing together the nodes of the first two lists

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = (l1, l2) => {
  // creating a dummy list to help make our list
  var newList = new ListNode(-1);
  // points the head of the list
  var head = newList;

  // while neither of the lists are null
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      // the next thing in our dummy list will be the smallest node in l1
      newList.next = new ListNode(l1.val);
      // this moves forward our pointer on l1
      l1 = l1.next;
    } else  {
      newList.next = new ListNode(l2.val);
      l2 = l2.next;
    }

    // this moves our pointer on the dummy list to the next node
    // this is so that we don't overwrite the element that we just added
    newList = newList.next;
  }

  if (l1 !== null) {
    // append the remainder of l1 to our dummy list
    newList.next = l1;
  }
  if (l2 !== null) {
    // append the remainder of l2 to our dummy list
    newList.next = l2;
  }
}
