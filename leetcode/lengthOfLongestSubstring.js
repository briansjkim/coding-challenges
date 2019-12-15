// given a string, find the length of the longest substring without repeating characters

// i: string
// o: number
// c: n/a
// e: empty string, 0
    // if there are no repeats
      // add the temp var to longest

// Medium level

var lengthOfLongestSubstring = (s) => {
  if (s.length <= 1) {
    return s.length;
  }

  var longest = '';
  var temp = '';
  var i = 0;
  var j = 0;


  while (i < s.length && j < s.length) {
    if (temp.indexOf(s[j]) < 0) {
      temp += s[j];
      if (j === s.length - 1) {
        if (longest.length < temp.length) {
          longest = temp;
          break;
        }
      }
      j++;
    } else {
      if (longest.length < temp.length) {
        longest = temp;
      }
      temp = '';
      i++;
      j = i;
    }
  }
  return longest.length;
}

// console.log(lengthOfLongestSubstring('abcabcbb')); // 3
// console.log(lengthOfLongestSubstring('bbbbb')); // 1
// console.log(lengthOfLongestSubstring('pwwkew')); // 3
// console.log(lengthOfLongestSubstring(' ')); // 1
// console.log(lengthOfLongestSubstring('')); // 0
// console.log(lengthOfLongestSubstring('au')); // 2
// console.log(lengthOfLongestSubstring('dvdf')); // 3
