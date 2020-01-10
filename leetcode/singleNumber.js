// given a non-empty array of integers, every element appears twice except for one. Find that single one
// Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// I: non-empty array of integers
// O: Number that isn't repeating
// C: Linear time complexity and No extra memory
// E: [2, 2, 1] => 1; [4, 1, 2, 1, 2] => 4

// implemented using an object
var singleNumber = nums => {
  var storage = {};
  for (var i = 0; i < nums.length; i++) {
    if (storage[nums[i]]) {
      storage[nums[i]]++;
    } else {
      storage[nums[i]] = 1;
    }
  }

  for (var key in storage) {
    if (storage[key] === 1) {
      return key;
    }
  }
};

// console.log(singleNumber([2, 2, 1]));
// console.log(singleNumber([4, 1, 2, 1, 2]));
