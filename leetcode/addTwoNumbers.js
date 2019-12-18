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



// approach:
  // create a new list with the ListNode class (newList)
  // create a variable to assign as the new list (head)
  // create a sum variable and set it to 0 (sum)
  // create a carry variable and set it to 0 (carry)
  // while both lists aren't null
    // add the current l1 node's value and current l2 node's value to sum
    // check if sum is greater than or equal to 10
      // if it is
        // subtract 10 from sum
        // add 1 to carry
    // set l1 to its next node
    // set l2 to its next node
    // set the newList's next node to equal a new node with the current sum as its value
    // set the current node in newList to equal the next node
    // set sum to equal carry
    // set carry to 0
  // return head.next


function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = (l1, l2) => {
  var newList = new ListNode(-1);
  var head = newList;
  var sum = 0;
  var carry = 0;


  // the two lists can have different lengths
  // if both lists are now empty, BUT the sum is greater than 1 because the sum of the last two nodes were greater than 10
  // you still want to add the sum as the next node
  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      // subtract 10 from sum BECAUSE the highest double digit integer that two nodes added can equal to is 18 (9 and 9)
      // since a node can't have double digits, the highest single digit integer that one node can be is 9
      sum -= 10;
      // then make carry equal to 1 in order to add that to the next node
      carry = 1;
    }

    newList.next = new ListNode(sum);
    newList = newList.next;
    sum = carry;
    carry = 0;
  }

  return head.next;
}
