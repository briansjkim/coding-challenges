// given an integer array nums
// find the contiguous subarray (containing at least one number) which has the largest sum
  // and return its sum


// i: array of numbers
// o: number (largest sum of a subarray)
// c: linear for now, log n for optimization
// e: if the array is empty, return 0


// approach: (finding the max as we iterate w/o any variables) -- better for space complexity
  // create a function that finds the contiguous subarray which has the largest sum and return its sum
  // iterate through the input array (start at 1 because starting at 0 will make every number NaN)
    // assign the current number as the max between the current number and the current number plus the number before it
  // return the max number within the array

var maxSubArray = (nums) => {
  if (nums.length === 0) {
    return 0;
  }

  for (var i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums);
}

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
// console.log(maxSubArray([])); //0
// console.log(maxSubArray([1, 5, -2, -9, 1, 7, -4, -8, 3, 2])); //8