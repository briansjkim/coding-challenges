// the sqrt of a number is between 1 and (x / 2) + 1

// binary search to close in on sqrt (if it's there)
var findSqrt = (x) => {
  var left = 1;
  var right = Math.floor(x / 2) + 1;
  var mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (mid * mid > x) {
      // if mid * mid is greater than x
      // assign 'right' to mid -1
      right = mid - 1;
    } else if (mid * mid < x) {
      // if mid * mid is less than x
      // assign 'left' to mid + 1
      left = mid + 1;
    } else {
      return mid;
    }
  }
  // if no sqrt was found
  return right;
}
