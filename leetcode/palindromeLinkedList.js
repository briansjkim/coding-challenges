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

// more optimal for time
var isPalindrome = function(head) {
    if (head === null || head.next === null) {
        return true;
    };
    
    // slow will eventually point to the mid node of the palindrome
    let slow = head;
    // fast is a helper with some assigned conditions to help make sure that slow points to the mid node
    let fast = head;
    
    // while both of the next two nodes of fast exist, slow moves 1 step and fast moves 2 steps
    // this way, slow will definitely point to the mid node or the first of the two mid nodes if there
    // an even number of nodes in the list
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    };
    
    // reverse all the nodes after the slow node, then assign the reversed list back to it
    slow.next = reverse(slow.next);
    slow = slow.next;
    
    // after the reverse, compare the reverse list with the original list from the beginning
    while (slow !== null) {
        if (head.val !== slow.val) {
            return false;
        };
        head = head.next;
        slow = slow.next;
    };
    
    return true;
};
// runtime: 196ms, memory: 65.4MB

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


