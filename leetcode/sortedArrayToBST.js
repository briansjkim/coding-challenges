//Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

//For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:
// [-10, -3, 0, 5, 9] => [0, -3, 9, -10, null, 5]

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var sortedArrayToBST = function (nums) {
  if (!nums.length) { return null; }
  var mid = Math.floor(nums.length / 2);
  var root = new TreeNode(nums[mid]);
  // mid is going to be excluded when using slice
  root.left = sortedArrayToBST(nums.slice(0, mid));
  // since the value at mid is going to be a node
  // don't include it when recursing
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
}

var nums = [-10, -3, 0, 5, 9];
// console.log(sortedArrayToBST(nums));
var moreNums = [-100, -38, 12, 36, 86];
// console.log(sortedArrayToBST(moreNums));
