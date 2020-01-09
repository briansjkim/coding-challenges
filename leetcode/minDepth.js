// given a binary tree, find its minimum depth
// the minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node
// Note: a leaf is a node with no children

// Example:
// given a binary tree [3, 9, 20, null, null, 15, 7]
// its minimum depth = 2

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var minDepth = root => {
  if (!root) {
    return 0;
  }
  if (!root.left) {
    return minDepth(root.right) + 1;
  }
  if (!root.right) {
    return minDepth(root.left) + 1;
  }

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
