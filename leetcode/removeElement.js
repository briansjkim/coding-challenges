// given an array nums and a value, remove all instances of that value in-place and return the new length
// do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory
// order of elements can be changed. it doesn't matter what you leave beyond the new length

// Quadratic time complexity solution
// var removeElement = (nums, val) => {
//   for (var i = 0; i < nums.length; i++) {
//     while (nums.includes(val)) {
//       nums.splice(nums.indexOf(val), 1);
//     }
//   }
//   return nums.length;
// }

// linear time complexity
var removeElement = (nums, val) => {
  var counter = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      counter++;
    }
  }
  return counter;
}


// console.log(removeElement([3, 2, 2, 3], 3));
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
