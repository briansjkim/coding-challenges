// Given an array of integers, return indices of the two numbers such that they add up to a specific target
// You may assume that each input would have EXACTLY one solution, and you may not use the same element twice

// i: array of numbers and a target number
// o: array of indices of the 2 numbers that equal the target number
// c: n/a
// e: may not use the same element twice

// each input would have EXACTLY one solution, so no edge case for if there isn't a solution

var twoSum = function (nums, target) {
  var result;
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

// linear
var twoSum = function (nums, target) {
  var storage = {};

  for (var i = 0; i < nums.length; i++) {
    var diff = target - nums[i];
    // hasOwnProperty method is constant because it's a key lookup
    if (storage.hasOwnProperty(diff)) {
      return [storage[diff], i];
    }
    storage[nums[i]] = i;
  }

}
