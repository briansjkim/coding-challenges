/*
Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Ex 1: 
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Ex2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

Ex 3:
Input: digits = [0]
Output: [1]
*/

var plusOne = function(digits) {
  // start the iteration from the end since we want to just add 1 to the last digit (EXCLUDING ANY EDGE CASES)
  for (let i = digits.length - 1; i >= 0; i--) {
    // immediately increment the current digit since that is the goal
    // if the current digit is >= 10, the if statement below will assign the value of 0 in its place
    // THEN, the iteration reaches the next integer, and if it's not >= 10 after the increment then the array will be returned
    // IF NOT, then the iteration will just continue until it reaches the end or reaches the else statement
    digits[i] += 1;

    // this is where we want to check if the single digit integer becomes double digit ( 9 => 10)
    if (digits[i] >= 10) {
      // if the current integer is greater than or equal to 10 after the increment
      // we want to assign the value to 0
      digits[i] = 0;
    } else {
      // if the current integer is less than 10, then just return the array
      return digits;
    };
  };

  // if nums hasn't been returned yet, it means that all of the numbers were greater than or equal to 10
  // so we want to add 1 to the beginning to account for that
  digits.unshift(1);
  return digits;
};
