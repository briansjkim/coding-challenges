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

var isPalindrome = function (node) {
  if (!node) { return null; }
  var reversed = reverse(node);
  var p1 = reversed;
  var p2 = node;

  while (p1 && p2) {
    if (p1.val !== p2.val) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  return true;
}

var list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(2);
list.next.next.next.next = new ListNode(1);

// console.log(isPalindrome(list));

var wrongList = new ListNode(1);
wrongList.next = new ListNode(2);
wrongList.next.next = new ListNode(3);
wrongList.next.next.next = new ListNode(4);
wrongList.next.next.next.next = new ListNode(5);

// console.log(isPalindrome(wrongList));
