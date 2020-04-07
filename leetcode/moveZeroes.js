// Given an array nums, write a funciton to move all 0's to the end of it while maintaining the relative order of the non-zero elements

// Example
// I: [0, 1, 0, 3, 12]
// O: [1, 3, 12, 0, 0]
// C:
// E: Must do this in-place without making a copy of the array
// Minimize the total number of operations

// approach:
// create a variable to be the first, slow pointer (idx)
// iterate through the input nums
// if the number isn't 0
// assign the number to nums[idx]
// if the current index is the same as idx
// keep the number as it is
// if it isn't the same,
// switch the number at the current index to 0
// increment idx

// 60ms
var moveZeroes = function (nums) {
  var idx = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      if (i !== idx) {
        nums[i] = 0;
      }
      idx++;
    }
  }
}

var moveZeroes = function (nums) {
  var idx = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      nums[i] = idx === i ? nums[i] : 0;
      idx++;
    }
  }
}
