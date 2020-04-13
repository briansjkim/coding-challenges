// Given a non-empty, singly linked list with head node 'head', return a middle node of linked list
// If there are two middle nodes, return the second middle node

// Example 1:
// I: [1, 2, 3, 4, 5]
// O: Node 3 from this list (Serialization: [3, 4, 5])

// Example 2:
// I: [1, 2, 3, 4, 5, 6]
// O: Node 4 from this list (Serialization: [4, 5, 6])
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one

// I: singly linked list
// O: middle node
// C:
// E: the number of nodes in the given list will be between 1 and 100

function ListNode(val) {
  this.val = val;
  this.next = null;
}
