/*
Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1. 

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

Constraints:
1 <= s.length <= 105
s consists of only lowercase English letters.
*/

// 140ms, 41.9MB
var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        // this if statement will help us find all of the duplicates
        // if the idxs are the same, that means the current char is a unique int
            // when this happens, we return the idx of the current char
        if ( s.indexOf(s[i]) === s.lastIndexOf(s[i]) ) {
            return i;
        };
    };

    // if none of the characters were unique, return -1
    return -1;
};
