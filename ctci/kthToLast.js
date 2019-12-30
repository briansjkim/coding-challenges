// implement an algorithm to find the kth to last element of a singly linked list

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

var kthToLast = (list, k) => {
  if (!list.head) {
    return null;
  }
  var p1 = list.head;
  var p2 = list.head;

  for (var i = 0; i < k; i++) {
    // if k is greater than the length of the list
      // return null
    if (!p1) {
      return null;
    }
    p1 = p1.next;
  }

  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2;
}

var list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(7);

// console.log(kthToLast(list, 3)); // 5
// console.log(kthToLast(list, 2)); // 6
// console.log(kthToLast(list, 4)); // 4
