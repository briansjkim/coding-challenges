// given a binary tree, find its maximum depth
// the maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node
// Note: A leaf is a node w/ no children

// Example:
// Given a binary tree [3, 9, 20, null, null, 15, 7]
// its depth = 3 (3, 20, 15, 7)

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// divide and conquer approach
// start from the root
// TRAVERSE LEFT
// once it reaches node w/ null, it'll return 0 but then add 1 at the end
// then it'll keep adding 1 until it reaches the root
// TRAVERSE RIGHT
// once it reaches node w/ null, it'll return 0 but then add 1 at the end
// then it'll keep adding 1 until it reaches the root
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }

  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
  // could also just do
  // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// another way to solve it; may be more understandable
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  if (!root.left) {
    return maxDepth(root.right) + 1;
  }
  if (!root.right) {
    return maxDepth(root.left) + 1;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

var tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.left.left = null;
tree.left.right = null;
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

// console.log(maxDepth(tree)); // 3
