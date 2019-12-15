// given a sorted array and a target value
// return the index if the target is found
// if not, return the index where it would be if it were inserted in order

var searchInsert = (nums, target) => {
  if (nums[0] > target) {
    return 0;
  }
  if (nums[nums.length - 1] < target) {
    return nums.length;
  }
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      continue;
    } else if (nums[i] >= target) {
      return i;
    }
  }
}

// console.log(searchInsert([1, 3, 5, 6], 5)); //2
// console.log(searchInsert([1, 3, 5, 6], 2)); // 1
// console.log(searchInsert([1, 3, 5, 6], 7)); // 4
// console.log(searchInsert([1, 3, 5, 6], 0)); // 0
