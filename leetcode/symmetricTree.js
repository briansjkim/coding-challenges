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
  // if no input was passed in
  if (!root) {
    return true;
  }

  function isMirror(a, b) {
    // if they're both null
    if (!a && !b) {
      return true;
    }

    // if only one of them is null
    if (!a || !b) {
      return false;
    }

    // if the values don't match
    if (a.val !== b.val) {
      return false;
    }

    // traverse the left side of a with the right side of b to check if they're mirrored
    // then check the right side of a with the left side of b
    return isMirror(a.left, b.right) && isMirror(a.right, b.left);
  }

  return isMirror(root.left, root.right);
};
