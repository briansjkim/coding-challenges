// given two binary trees, write a function to check if they are the same or not
// two binary trees are considered the same if they are structurally identical and the nodes have the same value

// Examples:
  // Input: [1, 2, 3], [1, 2, 3]
    // Output: True
  // Input: [1, 2], [1, null, 2]
    // Output: False
  // Input: [1, 2, 1], [1, 1, 2]
    // Output: False

var isSameTree = function(p, q) {
  // if they're both null, return true
  if (p === null && q === null) { return true; }

  // if only one of them are null, return false
  if (p === null || q === null) { return false; }

  // if the values don't match, return false
  if (p.val !== q.val) { return false; }

  // returns false when there's a mismatch
    // if there isn't a mismatch, keep traversing the tree on both sides until it reaches null

  // if they're the same tree, both will return true
  // else, return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
