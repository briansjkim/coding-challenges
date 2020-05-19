/**
 * Given a binary tree, determine if it is a valid binary search tree
 *
 * Assume a BST is defined as follow:
 *  The left subtree of a node contains only nodes with keys less than the node's key
 *  The right subtree of a node contains only nodes with keys greater than the node's key
 *  Both the left and right subtree must also be binary search tree
 *
 * Ex 1:
 * I: [2, 1, 3]
 * O: true
 *
 * Ex 2:
 * I: [5, 1, 4, null, null, 3, 6]
 * O: false
 *
 * i: binary tree
 * o: boolean depending on whether the input tree is a BST or not
 * c:
 * e:
 */

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var isValidBST = function (root) {
  return helper(root, null, null);
}

function helper(root, min, max) {
  // if we hit the end of the path, that means the left/right side is valid
  if (!root) { return true; }

  // the condition in the left checks for the left side
  // condition in the right checks for the right side
  if ((max !== null && root.val >= max) || (min !== null && root.val <= min)) {
    return false;
  }

  return helper(root.left, min, root.val) && helper(root.right, root.val, max);
}

// more readable helper function
function helper(root, min, max) {
  if (!root) { return true; }

  // checks the left side because max is root.val
  if (max !== null && root.val >= max) {
    return false;
  }

  // checks right side because min is root.val
  if (min !== null && root.val <= min) {
    return false;
  }

  return helper(root.left, min, root.val) && helper(root.right, root.val, max);
}
