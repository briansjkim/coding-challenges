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

// remove duplicates from an unsorted list

var removeDuplicates = (list) => {
  if (!list.head) {
    return null;
  }

  var p1 = list.head;
  var p2 = p1.next;
  var nodes = {};
  nodes[p1.val] = true;

  while (p2) {
    if (!nodes[p2.val]) {
      nodes[p2.val] = true;
      p1 = p2;
    } else {
      // if the node is a duplicate, set p1.next to p2.next, but DON'T move p1 yet
      p1.next = p2.next;
    }
    p2 = p2.next;
  }
  return list;
}
