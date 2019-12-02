// determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward
// extra: don't solve it without converting the integer to a string

// solution through converting integer to string
var isPalindrome = function(x) {
  var numString = '' + x;
  var result = '';
  for (var i = numString.length - 1; i >= 0; i--) {
    result += numString[i];
  }

  return check(numString, result);
}

var check = function(num1, num2) {
  for (var j = 0; j < num1.length; j++) {
    if (num1[j] !== num2[j]) {
      return false;
    }
  }
  return true;
}


// x % 10
// var isPalindrome = function(x) {
//   var result = 0;

// }
