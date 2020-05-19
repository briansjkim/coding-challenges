//Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

//For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:
// [-10, -3, 0, 5, 9] => [0, -3, 9, -10, null, 5]

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var sortedArrayToBST = function (nums) {
  if (nums.length === 0) { return null; }

  // since the array is already sorted, we can start with the middle number as the root
  let mid = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[mid]);

  // set the left side of the root to be the left half of the array
  root.left = sortedArrayToBST(nums.slice(0, mid));
  // set the right side of the root to be the right half of the array
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
}

var nums = [-10, -3, 0, 5, 9];
// console.log(sortedArrayToBST(nums));
var moreNums = [-100, -38, 12, 36, 86];
// console.log(sortedArrayToBST(moreNums));
