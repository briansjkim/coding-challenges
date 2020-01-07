// given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x
// you should preserve the original relative order of the nodes in each of the two partitions

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var partition = function(head, x) {
  if (!head) {
    return head;
  }
  // create two linked lists; one for nodes w/ vals < x and one for nodes w/ vals >= x
  var dummyLow = new ListNode(null);
  var dummyHigh = new ListNode(null);
  // less and high will act as pointers for their respective lists
  var less = dummyLow;
  var high = dummyHigh;
  // node will act as a pointer for the input list
  var node = head;

  // iterate through the input list
  while (node) {
    // if the node's val is less than x
    if (node.val < x) {
      // assign the next pointer of the current node in dummyLow to the current node from input list
      less.next = node;
      // move the pointer to the next node that was just added
      less = less.next;
    } else {
      // if the node's val is greater than or equal to x
      // assign the next pointer of the current node in dummyHigh to the current node from input list
      high.next = node;
      // move the pointer to the next node that was just added
      high = high.next;
    }
    // move the pointer to the next node
    node = node.next;
  }

  // less should now be at the last node of dummyLow, so assign its next pointer to the next node of dummyHigh
  // because the head of dummyHigh is null (line 15)
  less.next = dummyHigh.next;
  // high should now be at the last node of dummyHigh, so assign its next pointer to null
  high.next = null;
  // return the nodes after the head of dummyLow
  // because the head of dummyLow is null (line 14)
  return dummyLow.next;
};
