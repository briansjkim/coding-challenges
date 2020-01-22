// Implement a function to check if a linked list is a palindrome

// Example:
// Input: 1 -> 2 -> 3 -> 2 -> 1
// Output: true
// Example 2:
// Input: 1 -> 2 -> 3 -> 1 -> 2
// Output: false

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

var palindromeList = function (list) {

}
