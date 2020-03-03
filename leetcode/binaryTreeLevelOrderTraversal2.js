// Given a binary tree, return the bottom-up level order traversal of its nodes' values (left to right, level by level, leaf to root)

// Example:
// Input: Tree: [3, 9, 20, null, null, 15, 7]
// Output: [ [15, 7], [9, 20], [3] ]

// Exmaple 2:
// Input: Tree: [3, 9, 20, 7, 13, 15, 7]
// Output: [ [7, 13], [15, 7], [9, 20], [3] ]

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


var levelOrderBottom = function (root) {
  if (!root) { return []; }

  var result = [];

  var traverse = function (node, depth) {
    if (!node) { return; }

    if (!result[depth]) {
      result[depth] = [];
    }

    result[depth].push(node.val);

    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  }

  traverse(root, 0);
  return result;
}
