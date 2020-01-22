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

var reverse = function (node) {
  var head = null;

  while (node) {
    // create a new list node with the current node's val
    let newNode = new ListNode(node.val);
    // make the new list node's next pointer point to head (starting from the tail)
    newNode.next = head;
    // assign head to the new list node (working our way backwards)
    head = newNode;
    // assign the node to its next node
    node = node.next;
  }
  return head;
}


