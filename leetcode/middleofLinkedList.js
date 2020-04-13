// Given a non-empty, singly linked list with head node 'head', return a middle node of linked list
// If there are two middle nodes, return the second middle node

// Example 1:
// I: [1, 2, 3, 4, 5]
// O: Node 3 from this list (Serialization: [3, 4, 5])

// Example 2:
// I: [1, 2, 3, 4, 5, 6]
// O: Node 4 from this list (Serialization: [4, 5, 6])
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one

// I: singly linked list (Head)
// O: middle node
// C:
// E: the number of nodes in the given list will be between 1 and 100

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// we want to use two pointers
// move fast two nodes while moving slow one node in order to get to the end of the list and get the middle node

//56ms
var middleNode = function (head) {
  let fast = head;
  let slow = head;

  // check if fast isn't null and if the next node isn't null
  // if fast isn't null but the next node is null, that means we got to the end of the list
  // if fast is null, that means we passed the end of the list, so don't move slow anymore
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

var list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

// console.log(list);
// console.log(middleNode(list));
