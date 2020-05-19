/**
 * Given a binary tree, return the level order traversal of its nodes' values (i.e. from left to right, level by level)
 *
 * Ex:
 * I: [3, 9, 20, null, null, 15, 7]
 * O: [ [3], [9, 20], [15, 7] ]
 *
 * i: binary tree
 * o: array of arrays
 * c:
 * e:
 */

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// BFS
var levelOrder = function (root) {
  if (!root) { return []; }
  let result = [];
  let arr = [];
  arr.push(root);

  while (arr.length > 0) {
    let inner = [];
    // store the array's length in a separate variable in order to keep the ORIGINAL size of it because we are pushing new nodes inside the for loop
    let size = arr.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      inner.push(node.val);

      if (node.left) { arr.push(node.left); }
      if (node.right) { arr.push(node.right); }
    }

    result.push(inner);
  }

  return result;
}
