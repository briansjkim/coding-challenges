// given a non-empty array of integers, every element appears twice except for one. Find that single one
// Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// I: non-empty array of integers
// O: Number that isn't repeating
// C: Linear time complexity and No extra memory
// E: [2, 2, 1] => 1; [4, 1, 2, 1, 2] => 4

// implemented using an object
// var singleNumber = nums => {
//   var storage = {};
//   for (var i = 0; i < nums.length; i++) {
//     if (storage[nums[i]]) {
//       storage[nums[i]]++;
//     } else {
//       storage[nums[i]] = 1;
//     }
//   }

//   for (var key in storage) {
//     if (storage[key] === 1) {
//       return key;
//     }
//   }
// };

// w/o using extra memory
// uses bit manipulation

// Uses the XOR operator
// If we take XOR of zero and some bit, it'll return that bit
// a ^ 0 = a
// If we take XOR of two same bits, it'll return 0
// a ^ a = 0

// So if we use XOR on all bits together, we can find the unique number
var singleNumber = nums => {
  // First example
  // a = 2, b = 2 => 0
  // a = 0, b = 1 => 1
  // Second Example
  // a = 4, b = 1 =>  5
  // a = 5, b = 2 => 7
  // a = 7, b = 1 => 6
  // a = 6, b = 2 => 4
  return nums.reduce((a, b) => a ^ b);
};

// console.log(singleNumber([2, 2, 1]));
// console.log(singleNumber([4, 1, 2, 1, 2]));
