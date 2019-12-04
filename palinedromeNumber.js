// determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward


var isPalindrome = function(x) {
  var numString = '' + x;
  var result = '';
  for (var i = numString.length - 1; i >= 0; i--) {
    result += numString[i];
  }

  return result === numString;
}


// console.log(isPalindrome(121));
// console.log(isPalindrome(-121));
