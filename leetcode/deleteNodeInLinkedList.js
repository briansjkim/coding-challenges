// Write a function to delete a node (except the tail) in a singly linked list, given only access to that node

/*
Example 1:
Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

Example 2:
Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
*/

/**
Note:
The linked list will have at least two elements.
All of the nodes' values will be unique.
The given node will not be the tail and it will always be a valid node of the linked list.
Do not return anything from your function.
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function deleteNode(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}

var newList = new ListNode(4);
newList.next = new ListNode(5);
newList.next.next = new ListNode(1);
newList.next.next.next = new ListNode(9);

deleteNode(newList.next);
// console.log(newList); // 4 -> 1 -> 9

var secondList = new ListNode(4);
secondList.next = new ListNode(5);
secondList.next.next = new ListNode(1);
secondList.next.next.next = new ListNode(9);

deleteNode(secondList.next.next);
// console.log(secondList); // 4 -> 5 -> 9

var thirdList = new ListNode(9);
thirdList.next = new ListNode(3);
thirdList.next.next = new ListNode(2);
thirdList.next.next.next = new ListNode(6);

deleteNode(thirdList.next.next);
// console.log(thirdList); // 9 -> 3 -> 6
