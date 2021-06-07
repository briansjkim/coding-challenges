/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

// 160ms 41.1 MB memory
var isAnagram = function(s, t) {
    let sObj = {};
    let tObj = {};
    
    for (let i = 0; i < s.length; i++) {
        if (!sObj[s[i]]) {
            sObj[s[i]] = 1;
        } else {
            sObj[s[i]]++;
        };
    };
    
    for (let j = 0; j < t.length; j++) {
        if (!tObj[t[j]]) {
            tObj[t[j]] = 1;
        } else {
            tObj[t[j]]++;
        };
    };
    
    for (let sKey in sObj) {
        if (!tObj[sKey] || sObj[sKey] !== tObj[sKey]) {
            return false;
        };
    };
    
    for (let tKey in tObj) {
        if (!sObj[tKey] || tObj[tKey] !== sObj[tKey]) {
            return false;
        };
    };
    
    return true;
};

var isAnagram = function(s, t) {
    let storage = {};

    for (let i = 0; i < s.length; i++) {
        if (!storage[s[i]]) {
            storage[s[i]] = 1;
        } else {
            storage[s[i]]++;
        };
    };

    for (let j = 0; j < t.length; j++) {
        if (!storage[t[j]]) {
            storage[t[j]]--;
        } else {
            return false;
        };
    };

    return true;
};
