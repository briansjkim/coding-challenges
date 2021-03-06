// given a linked list, determine if it has a cycle in it
// to represent a cycle in the given linked list, we use an integer 'pos' which represents the position (0-indexed)
// in the linked list where tail connects to. If 'pos' is -1, then there is no cycle in the linked list

// Example 1:
// I: head = [3, 2, 0, -4], pos = 1
// O: true
// Explanation: There is a cycle in the linked list, where tail connects to the second node (pos = 1)

// Example 2:
// I: head = [1, 2], pos = 0
// O: true
// Explanation: There is a cycle in the linked list, where tail connects to the first node (pos = 0)

// Example 3:
// I: head = [1], pos = -1
// O: false
// Explanation: There isn't a cycle in the linked list

// Example 4:
// I: head = [1, 3, 6, 2], pos = -1
// O: false
// Explanation: There isn't a cycle in the linked list


// Linear time and constant space
var hasCycle = function (head) {
  if (!head) { return false; }
  var slow = head;
  var fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
}

// Linear time and linear space
// space depends on the number of elements added to storage
var hasCycle = function (head) {
  if (!head) { return false; }
  var storage = [];
  var pointer = head;

  while (pointer) {
    if (storage.includes(pointer)) {
      return true;
    } else {
      storage.push(pointer);
    }
  }
  return false;
}
