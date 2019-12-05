// given a string, write a function to check if it is a permutation of a palindrome
// a palindrome is a word or phrase that is the same forwards and backwards.
// a permutation is a rearrangement of letters
// the palindrome doesn't need to be limited to just dictionary words (can be anything)
// ignore casing and non-letter characters


// linear time complexity
var checkPalindrome = (string) => {
  var lowerCaseStr = string.toLowerCase();

  var check1 = {};
  var check2 = {};

  for (var i = 0; i < lowerCaseStr.length; i++) {
    var char = lowerCaseStr[i];
    if (lowerCaseStr[i] !== typeof string) {
      continue;
    }
    if (check1[char]) {
      check1[char]++;
    } else {
      check1[char] = 1;
    }

    if (check2[char]) {
      check2[char]++;
    } else {
      check2[char] = 1;
    }
  }

  for (var key in check1) {
    if (check1[key] !== check2[key]) {
      return false;
    }
  }

  return true;
}

console.log(checkPalindrome('Tact Coa')); // true
console.log(checkPalindrome('Tact5 Coa3')); // true
console.log(checkPalindrome('te3st5 e5s8tt')); // true
