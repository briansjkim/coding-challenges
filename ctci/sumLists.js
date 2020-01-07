// you have two numbers represented by a linked list, where each node contains a single digit
// the digits are stored in REVERSE order, such that the 1's digit is at the head of the list.
// write a function that adds the two numbers and returns the sum as a linked list
// NOTE: Not allowed to 'cheat' and just convert the linked list to an integer

// Examples:
// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2) => 617 + 295
// Output: (2 -> 1 -> 9) => 912

// Follow Up
// Suppose the digits are stored in forward order. Repeat the above problem
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5) => 617 + 295
// Output: (9 -> 1 -> 2) => 912

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

var sumLists = (l1, l2) => {
  if (!l1 && !l2) {
    return null;
  }
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  var dummyList = new ListNode(null);
  var head = dummyList;
  var sum = 0;
  var carry = 0;

  while (l1 || l2 || sum > 0) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum > 9) {
      sum -= 10;
      carry = 1;
    }

    dummyList.next = new ListNode(sum);
    dummyList = dummyList.next;
    sum = carry;
    carry = 0;
  }

  return head.next;
};

var l1 = new LinkedList();
l1.add(7);
l1.add(1);
l1.add(6);

var l2 = new LinkedList();
l2.add(5);
l2.add(9);
l2.add(2);

sumLists(l1, l2);
