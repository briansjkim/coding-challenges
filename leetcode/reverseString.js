/*
Share
Write a function that reverses a string. The input string is given as an array of characters s.

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

Constraints:
1 <= s.length <= 105
s[i] is a printable ascii character.

*/

// 104ms and 45.9MB memory
var reverseString = function(s) {
    // do a simple two pointer approach
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;

        i++;
        j--;
    };
};
