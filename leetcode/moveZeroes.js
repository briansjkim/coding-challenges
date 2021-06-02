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

// 80ms, 40.4 MB
var moveZeroes = function(nums) {
  // will act as our slow pointer
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    // if the current int isn't zero
    if (nums[i] !== 0) {
      // we want to give the int at the slow pointer the current int's value
      nums[j] = nums[i];

      // then we want to check if the two idxs are the same
        // this way we can check for two things
        // if i === j, that means the array has only one non zero item
        // and when the slow pointer (j) catches up to the fast pointer (i)
          // this means that there are no zeroes that i has seen
      if (i !== j) {
        nums[i] = 0;
      };

      j++;
    };
  };
};
