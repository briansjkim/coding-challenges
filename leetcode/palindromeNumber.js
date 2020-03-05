// determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward


var isPalindrome = function (x) {
  var numString = '' + x;
  var result = '';
  for (var i = numString.length - 1; i >= 0; i--) {
    result += numString[i];
  }

  return result === numString;
}

// slightly faster solution
var isPalindrome = function (x) {
  // negative numbers aren't palindromes
  if (x < 0) { return false; }
  // if x is a single digit, it is a palindrome
  if (x < 10) { return true; }

  var numString = String(x);
  var reverseNum = '';

  for (var i = numString.length - 1; i >= 0; i--) {
    reverseNum += numString[i];
  }
  return reverseNum === numString;
}


// console.log(isPalindrome(121));
// console.log(isPalindrome(-121));
