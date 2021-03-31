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

// optimized version
var areAlmostEqual = function(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    };

    let count = 0;
    
    // checks if all the letters are the same between the two strings
    // for (let letter of s1) {
    //     if (!s2.includes(letter)) {
    //         return false;
    //     };
    // };

    // checks the number of the differences between the two strings
    // for (let i = 0; i < s1.length; i++) {
    //     if (s1[i] !== s2[i]) {
    //         count++;
    //     };
    // };

    // using these two for loops runs a bit slower, but it uses less memory
    // runtime: 84ms, memory usage: 38.5MB
    for (i; i < s1.length; i++) {
        if (!s2.includes(s1[i])) {
            return false;
        };
    };

    for (i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            count++;
        };
    };
    // if count = 2, that means we can perform a string swap
    // if count = 0, that means the two strings are already the same
    // if count equals neither, that means we can't perform a string swap
    return count === 2 || count === 0;
};

// runtime: 72ms, memory usage: 39.1MB

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