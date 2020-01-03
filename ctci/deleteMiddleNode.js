// implement an algorithm to delete a node in the middle (i.e. any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node

// Input: the node c from the linked list a -> b -> c -> d -> e -> f
// Output: nothing is returned, but the new linked list looks like a -> b -> d -> e -> f

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }
}

var removeMidNode = (node, list) => {
  if (!list.head) {
    return null;
  }
  var pointer = list.head;
  while (pointer) {
    if (pointer.next.val === node.val) {
      pointer.next = pointer.next.next;
      break;
    }
    pointer = pointer.next;
  }
};
