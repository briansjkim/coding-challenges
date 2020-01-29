// given a linked list which might contain a loop, implement an algorithm that returns the node at the beginning of the loop (if one exists)

// Example:
// I: A -> B -> C -> D -> E -> C (the same C as earlier)
// O: C

const loopDetection = function (head) {
  if (!head) { return false; }
  var fast = head;
  var slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return fast;
    }
  }
  return false;
}
