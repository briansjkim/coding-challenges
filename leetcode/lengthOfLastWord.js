// given a string s consists of upper/lower-case alphabets and empty space characters ' ',
// return the length of last word in the string
// if the last word doesn't exist, return 0
// a word is defined as a character sequence consisting of non-space characters only

var lengthOfLastWord = function(s) {
  // trim removes whitespace from both the beginning and the end of a string
  // use split to get the words separated by a space
  var result = s.trim().split(' ');
  return result[result.length - 1].length;
}
