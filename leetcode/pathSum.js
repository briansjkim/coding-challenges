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

// to further shorten the code, I could do this:
var hasPathSum = (root, sum) => {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right ) {
    return sum === root.val;
  }

  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}

// another way to implement it
var hasPathSum = (root, sum) => {
  // track whether there's at least one path of values that equals the sum
  var hasSum = false;

  var traverse = (node, total) => {
    if (!node) { return false; }
    total += node.val;
    if (!node.left && !node.right) {
      if (total === sum) {
        // if the total = sum
          // set hasSum to true
        // if it doesn't,
          // don't do anything because we don't want to overwrite hasSum if there's at least one path of values that equals the sum
        hasSum = true;
        return;
      }
    } else {
      traverse(node.left, total);
      traverse(node.right, total);
    }
  }

  traverse(root, 0);
  return hasSum;
}
