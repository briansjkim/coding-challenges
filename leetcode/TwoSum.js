// Given an array of integers, return indices of the two numbers such that they add up to a specific target
// You may assume that each input would have EXACTLY one solution, and you may not use the same element twice

// Example 1:
// i: nums = [2, 7, 11, 15], target = 9
// o: [0, 1] because nums[0] + nums[1] = target

// quadratic
function twoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// linear
function twoSum(nums, target) {
  var storage = {};

  for (var i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (storage.hasOwnProperty(diff)) {
      return [storage[diff], i];
    }
    storage[nums[i]] = i;
  }
}

