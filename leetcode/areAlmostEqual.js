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