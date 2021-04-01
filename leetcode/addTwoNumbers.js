// you are given two non-empty linked lists representing two non-negative integers
// the digits are stored in REVERSE order and each of their nodes contain a single digit
// add the two numbers and return it as a linked list
// you may assume the two numbers don't contain any leading zero, except the number 0 itself

/**
 * Example:
 * Input : (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 645 = 807
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  let newList = new ListNode(-1);
  let newHead = newList;
  let sum = 0;
  let carry = 0;

  // we check if the current node for each LL is valid because the two LLs could be unequal in length
  // we also check if the sum is greater than 0 because we have to add it to the end of the list
  while (l1 || l2 || sum > 0) {
    // in the case that the two LLs aren't equal, we again check if the current node for each LL is valid
    // we do this again because the while loop will run if any of the three conditions are true, so we might have reached the end of l1 and l2 but sum > 0, so we don't
    // want to add the nonvalid values from l1 and l2 which will be undefined/null
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    };

    if (l2) {
      sum += l2.val;
      l2 = l2.val;
    };

    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    };

    newHead.next = new ListNode(sum);
    newHead = newHead.next;
    // assign carry to sum so that we can add it with the next sum
    sum = carry;
    carry = 0;
  };

  return newList.next;
};
// runtime: 136ms, memory usage: 44.2MB
