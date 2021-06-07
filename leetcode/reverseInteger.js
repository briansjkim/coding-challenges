/*
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Example 4:
Input: x = 0
Output: 0

Constraints:
-231 <= x <= 231 - 1
*/

// 100ms 40.2MB
var reverse = function(x) {
  let numStr = Math.abs(x).toString();
  let numArr = numStr.split('');

  let result = '';

  for (let i = numArr.length - 1; i >= 0; i--) {
    result += numArr[i];
  };

  result = Number(result);

  if (result > 2**31) {
    return 0;
  } else {
    return result * Math.sign(x);
  };
};

// 92ms 39.8MB
var reverse = function(x) {
  let reversedNum = Math.abs(x).toString().split('').reverse().join('');

  if (reversedNum > 2**31) {
    return 0;
  } else {
    return reversedNum * Math.sign(x);
  };
};