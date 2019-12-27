var hasPathSum = (root, sum) => {
  if (!root) {
    return false;
  }

  // if we reach a leaf
  if (!root.left && !root.right) {
    // return whether or not the value of the leaf is equal to what's left of the sum
    return sum === root.val;
  }

  // as we traverse the left,
  // subtract root.val from the sum
  var traverseLeft = hasPathSum(root.left, sum - root.val);
  // same with traversing the right
  var traverseRight = hasPathSum(root.right, sum - root.val);
  // if the sum reached 0 in either left or right
    // true will be returned
  // if the sum didn't reach 0 in either left or right
    // false will be returned
  return traverseLeft || traverseRight;
}
