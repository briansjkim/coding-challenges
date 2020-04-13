// Given two strings S and T, return if they are equal when both are typed into empty text editors.
// # means a backspace character

// Example 1:
// I: S = "ab#c", T = "ad#c"
// O: true
// Explanation: Both S and T become "ac"

// Example 2:
// I: S = "ab##", T = "c#d#"
// O: true
// Explanation: Both become ""

// Example 3:
// I: S = "a##c", T = "#a#c"
// O: true
// Explanation: Both become "c"

// Example 4:
// I: S = "a#c", T = "b"
// O: false
// Explanation: S becomes "c" while T stays "b"

// I: two strings
// O: boolean
// C: Time complexity: O(N) and space complexity: O(1)
// E: 1 <= S.length <= 200; 1 <= T.length <= 200; S and T only contain lowercase letters and '#' characters

var traverse = function (string) {
  let storage = [];

  for (let char of string.split('')) {
    char === '#' ? storage.pop() : storage.push(char);
  }

  return storage.join('');
}

// create helper function to do the operation because it's the same operation for both strings
var traverse = function (string) {
  let storage = [];

  for (let char of string.split('')) {
    if (char === '#') {
      storage.pop();
    } else {
      storage.push(char);
    }
  }
  return storage.join('');
}

// 52 ms
var backspaceCompare = function (S, T) {
  return traverse(S) === traverse(T);
}
