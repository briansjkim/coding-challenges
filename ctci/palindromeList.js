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

var reverse(node) {
  var head = null;

  while (!node) {
    var newNode = new ListNode(node.val);
    newNode.next = head;
    head = newNode;
    node = node.next;
  }

  return head;
}
