// given a sorted array, remove the duplicates IN-PLACE such that each element appear only ONCE and return the new length
// do not allocate extra space for a nother array, you must do this by MODIFYING THE INPUT ARRAY in-place with O(1) extra memory

// creating a new object

var removeDuplicates = (nums) => {
  var unique = {};

  for (var i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!unique[num]) {
      unique[num] = 1;
    }
  }

  return Object.keys(unique).length;
}

// adjusting the array in place
var removeDuplicates = (nums) => {
  var i = 0;
  var j = 1;

  while (i < nums.length && j < nums.length) {
    if (nums[i] === nums[j]) {
      nums.splice(j, 1);
    } else {
      i++;
      j++;
    }
  }

  return nums.length;
}

// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

