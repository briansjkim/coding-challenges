// given a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center)

// Example:
// Input: [1, 2, 2, 3, 4, 4, 3];
// Root: [1]
// Left: [2, 3, 4]
// Right: [2, 4, 3]
// Output: True
// Input: [1, 2, 2, null, 3, null, 3]
// Root: [1]
// Left: [2, null, 3]
// Right: [2, null, 3]
// Output: False

// i: binary tree
// o: boolean (whether the tree is a mirror of itself or not)
// c:
// e:

var isSymmetric = root => {
  if (!root) { return true; }

  return helper(root.left, root.right);
};

function helper(a, b) {
  if (!a && !b) {
    return true;
  }

  if (!a || !b) {
    return false;
  }

  // only check if the two vals are different
  // return false if they aren't
  // if they are, continue to traverse
  if (a.val !== b.val) {
    return false;
  }

  return helper(a.left, b.right) && helper(a.right, b.left);
}

