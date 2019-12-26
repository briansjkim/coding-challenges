// invert a binary tree

var invertTree = (root) => {
  if (root === null) {
    return null;
  }

  var temp = root.left;
  // traverse the whole left side first
  // and invert the right and left nodes
  root.left = invertTree(root.right);
  // traverse the whole right side after
  // and invert the right and left nodes
  root.right = invertTree(temp);
  // at the end of all the recursion,
  // the root's initial left is now the root's right
  // and the root's inital right is now the root's left
  return root;
}
