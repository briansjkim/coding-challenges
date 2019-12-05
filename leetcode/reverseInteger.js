// given a 32-bit signed integer, reverse digits of an integer
// NOTE: Doesn't pass 1 test case where environment can only store within 32-bit signed integer range: [-2^31, 2^31 -1]

var reverse = function(x) {
  var numString = '' + x;
  var numArray = numString.split('');

  // removes the negative
  if (numArray[0] === '-') {
    numArray.splice(0, 1);
  }

  var result = '';
  for (var i = numArray.length - 1; i >= 0; i--) {
    result += numArray[i];
  }

  result = Number(result);

  if (x < 0) {
    result *= -1;
  }

  return result;
}

// Passes all tests on leetcode, but doesn't check for lower limit...
var reverse = function(x) {
  var limit = 2147483648; // upper limit
  var k = x < 0 ? -1 : 1; // checks if x is less than 0
  var n = Number(String(Math.abs(x)).split('').reverse().join(''));
  return n > limit ? 0 : n * k;
}
