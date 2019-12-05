// Given an array of integers, return indices of the two numbers such that they add up to a specific target
// You may assume that each input would have EXACTLY one solution, and you may not use the same element twice

// i: array of numbers and a target number
// o: array of indices of the 2 numbers that equal the target number
// c: n/a
// e: may not use the same element twice

// each input would have EXACTLY one solution, so no edge case for if there isn't a solution

// approach:
  // create a function twoSum that takes an array and a target number
  // create a result array variable
    // set it to [0, 0]
  // iterate through the input array and start at index 0
    // iterate through the input array again but start at the next index
      // if the 1st iteration's element and the 2nd iteration's element sum equals the target
        // set result as the 1st iteration's index and the 2nd iteration's index ( [i, j] )
        // return the result

var twoSum = function(nums, target) {
  var result = [0, 0];
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result = [i, j];
        return result;
      }
    }
  }
}
// time complexity: quadratic
