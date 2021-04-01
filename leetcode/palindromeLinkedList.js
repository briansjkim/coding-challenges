/**
 * Given head of a singly linked list, return true if it is a palindrome
 * 
 * Ex 1:
 * I: head = [1, 2, 2, 1]
 * o: true
 * 
 * Ex 2:
 * i: head = [1, 2]
 * o: false
 * 
 * Constraints:
 * The number of nodes in the list is in the range [1, 10^5]
 * 0 <= Node.val <= 9
 */

// not optimal for time
var reverse = function(node) {
    let currentNode = node;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) {
        nextNode = currentNode.next;
        prevNode = currentNode;

        currentNode.next = prevNode;
        currentNode = nextNode;
    };

    // return the prevNode because currentNode will fall out of the LL while the prevNode will be at the last node
    return prevNode;
};

var isPalindrome = function(head) {
    if (head === null || head.next === null) {
        return true;
    };

    let reversedList = reverse(head);

    while (head && reversedList) {
        if (head.val !== reversedList.val) {
            return false;
        };
    };

    return true;
};


