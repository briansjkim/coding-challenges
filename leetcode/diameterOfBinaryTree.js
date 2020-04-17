// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the LONGEST path between any two nodes in a three.
// This path may or may not pass through the root

// Example:
// Given a binary tree[1, 2, 3, 4, 5]
// Return 3, which is the length of the path[4, 2, 1, 3] or[5, 2, 1, 3]
// Note: the length of path between two nodes is represented by the number of edges between them

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// 64ms
var diameterOfBinaryTree = function (root) {
  let count = 0;

  var traverse = function (node) {
    if (!node) { return 0; }

    var left = traverse(node.left);
    var right = traverse(node.right);

    count = Math.max(count, left + right);
    return Math.max(left, right) + 1;
  }

  traverse(root);
  return count;
}
// node 1: count = 0. traverses left side first
// node 2: count = 0. traverses left side first
// node 4: count = 0 because left and right nodes are null; returns 1
// node 2: count = 0 still because it needs to traverse right side
// node 5: count = 0 because left and right nodes are null; returns 1
// node 2: count = 2 because left and right nodes returned 1; returns 2 because the max between left and right is 1 then add 1
// node 1: count = 0 still because it needs to traverse right side. left variable has the value of 2
// node 3: count = 0 becaues left and right nodes are null; returns 1
// node 1: left var = 2, right var = 1, count = Math.max(0, 2 + 1) = 3
// node 1: returns the max between left and right which is 2, then plus 1
// count = 3 from line 39
