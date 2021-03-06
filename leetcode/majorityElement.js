// Given an array of size n, find the majority element. The majority element is the element that appears more than n / 2 times
// You may always assume that the array is non-empty and the majority element always exists in the array

// Example 1:
// I: [3, 2, 3]
// O: 3
// Explanation: n = 3, n / 2 = ~1 and 3 appears more than once in the input array

// Example 2:
// I: [2, 2, 1, 1, 1, 2, 2]
// O: 2
// Explanation: n = 7, n / 2 = ~3 and 2 appears more than three times in the input array

// I: Array of numbers
// O: Majority element (num that appears more than n / 2 times)
// C: N/a
// E:

// Approach
// create a function to find the majority element
// calc n / 2 to find how many times each num in input array must occur to be the majority element (majority)
// create an object to hold each number (storage)
// iterate through the input array
// for each number
// if the number is in storage
// increment its value by 1
// else
// set its value to 1
// iterate through storage
// for each key
// if its value is greater than majority
// return the key

// Linear time and linear space
var majorityElement = function (nums) {
  var majority = Math.floor(nums.length / 2);
  var storage = {};

  for (var i = 0; i < nums.length; i++) {
    if (storage[nums[i]]) {
      storage[nums[i]]++;
    } else {
      storage[nums[i]] = 1;
    }
  }

  for (var key in storage) {
    if (storage[key] > majority) {
      return key;
    }
  }
}

// Linear time and linear space, but a bit faster than the first approach
var majorityElement = function (nums) {
  var storage = {};

  for (var i = 0; i < nums.length; i++) {
    storage[nums[i]] = storage[nums[i]] + 1 || 1;
    if (storage[nums[i]] > Math.floor(nums.length / 2)) {
      return nums[i];
    }
  }
}

majorityElement([3, 2, 3]); // 3
majorityElement([2, 2, 1, 1, 1, 2, 2]); // 2
