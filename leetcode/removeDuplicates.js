// given a sorted array, remove the duplicates IN-PLACE such that each element appear only ONCE and return the new length
// do not allocate extra space for another array, you must do this by MODIFYING THE INPUT ARRAY in-place with O(1) extra memory

/**
 * Ex 1:
 * I: nums = [1, 1, 2]
 * o: 2 because it should be the length of the array after ONLY considering unique values
 *
 * Ex 2:
 * i: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
 * o: 5 because nums should only contain 0, 1, 2, 3, 4
 *
 * i: sorted array of ints
 * o: integer which represents the length of the array after only considering unique values
 * c: O(1) space complexity
 * e: modify the input array in-place
 */

// re-doing problem and removing duplicates IN-PLACE
var removeDuplicates = function(nums) {
  let newLen = 0;
  
  for (let i = 1; i < nums.length; i++) {
      if (nums[newLen] !== nums[i]) {
          newLen += 1;
          nums[newLen] = nums[i];
      };
  };
  
  return newLen += 1;
};



console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

