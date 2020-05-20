var plusOne = (digits) => {
  // start at the end because the last element COULD be the only digit that we change
  for (let i = digits.length - 1; i >= 0; i--) {
    // we pre-increment the digit because regardless of whether it is greater than or equal to 10, we have to increment the last digit
    // Ex: [1, 2, 3] -> 3 is already incremented BEFORE the condition is checked

    // if the last digit was 9, then it becomes 10 and i moves left to the next element
    // THEN it pre-increments and then checks if it's greater than or equal to 10

    digits[i] += 1;
    if (digits[i] >= 10) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }

  // if all of the digits were 9 or 0, then we want to add 1 to the beginning
  digits.unshift(1);
  return digits;
}
