var plusOne = (digits) => {
  // iterate from the end bc the last element is the only element that we need to (POSSIBLY) change
  for (var i = digits.length - 1; i >= 0; i--) {
    // pre-increment the digit first
      // we can increment the digit to the desired result AND check if it's greater than 9
    if (++digits[i] > 9) {
      // if the incremented digit is greater than 9,
      // turn it into a zero
      digits[i] = 0;
    } else {
      // return if the digit isn't greater than 9
      return digits;
    }
  }
  // if all of the digits were greater than 9
  // add a 1 to the beginning to match the desired result
  digits.unshift(1);
  return digits;
}
