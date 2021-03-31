/**
 * 
 * You are given two strings s1 and s2 of equal length. 
 * A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.
 * Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.
 * 
 * Ex 1:
 * Input: s1 = "bank", s2 = "kanb"
    Output: true
    Explanation: For example, swap the first character with the last character of s2 to make "bank".

    Ex 2:
    Input: s1 = "attack", s2 = "defend"
    Output: false
    Explanation: It is impossible to make them equal with one string swap.

    Ex 3:
    Input: s1 = "kelb", s2 = "kelb"
    Output: true
    Explanation: The two strings are already equal, so no string swap operation is required.

    Ex 4:
    Input: s1 = "abcd", s2 = "dcba"
    Output: false
 */

var areAlmostEqual = function(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    };

    let i = 0;
    let j = 0;
    let s1Obj = {};
    let s2Obj = {};
    let count = 0;

    for (i; i < s1.length; i++) {
        s1Obj[s1[i]] = (s1Obj[s1[i]] || 0 ) + 1;
    };

    for (j; j < s2.length; j++) {
        s2Obj[s2[j]] = (s2Obj[s2[j]] || 0 ) + 1;
    };

    for (let key in s1Obj) {
        if (!s2Obj.hasOwnProperty(key)) {
            return false;
        };

        if (s1Obj[key] !== s2Obj[key]) {
            return false;
        };
    };

    i = 0;
    j = 0;

    while (i < s1.length && j < s2.length) {
        if (s1[i] !== s2[j]) {
            count++;
        };
        i++;
        j++;
    };

    return count === 2 || count === 0;
};

// runtime: 96ms, memory usage: 40.8MB