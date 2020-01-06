// write code to partition a linked list around a value x,
// such that all nodes less than x come before all nodes greater than or equal to x
// Note: the partition element x can appear anywhere in the 'right partition'; it doesn't need to appear between the left and right partitions

// Example:
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1
// Output: 3 -> 1 -> 2    10 -> 5 -> 5 -> 8

function ListNode(val) {
  this.val = val;
  this.next = null;
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(val) {
    var newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}

// Solution with arrays (not recommended)
var partitionList = (list, x) => {
  if (!list.head) {
    return null;
  }
  var left = [];
  var right = [];
  var pointer = list.head;

  while (pointer) {
    if (pointer.val < 5) {
      left.push(pointer);
    } else {
      right.push(pointer);
    }
    pointer = pointer.next;
  }

  for (var i = 0; i < left.length; i++) {
    if (i === left.length - 1) {
      left[i].next = null;
    }
    left[i].next = left[i + 1];
  }
  for (var j = 0; j < right.length; j++) {
    if (j === right.length - 1) {
      right[i].next = null;
    }
    right[i].next = right[i + 1];
  }
  var partitionedList = left.concat(right);
  return partitionedList[0];
};

// Solution with pure linked lists (recommended)
var partitionList = (list, x) => {
  if (!list.head) {
    return list.head;
  }
  // create two dummy linked lists
  var dummyLow = new ListNode(null);
  var dummyHigh = new ListNode(null);
  // set 'less' to dummyLow to start at the head
  // basically a pointer
  var less = dummyLow;
  // set 'high' to dummyHigh to start at the head
  // basically a pointer
  var high = dummyHigh;
  var node = list.head;

  while (node) {
    if (node.val < x) {
      // set the next node at less to the node
      less.next = node;
      // move the 'pointer' to the next node that was just added
      less = less.next;
    } else {
      // set the next node at high to the node
      high.next = node;
      // move the 'pointer' to the next node that was just added
      high = high.next;
    }
    node = node.next;
  }
  // less is now at the last node in less
  // so make its next pointer point to the next node in dummyHigh
  // not dummyHigh because the head is null (line 73)
  less.next = dummyHigh.next;
  // high is now at the last node in high
  // so make its next pointer point to null
  high.next = null;
  // return the next node from dummyLow because the head is null (line 72)
  return dummyLow.next;
};
