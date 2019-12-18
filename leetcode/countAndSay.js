/**
 * the count-and-say sequence is the sequence of integers with the first five terms as following:
 * 1. 1
 * 2. 11
 * 3. 21
 * 4. 1211
 * 5. 111221
 *
 * given an integer n where 1 <= n <= 30, generate the nth term of the count-and-say sequence.
 * you can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit
 *
 * note: each term of the sequence of integers will be represented as a string
 */

//i: an integer (n)
//o: a sequence of integers (n - 1)
//c: optimize
//e: n will always be between 1 and 30

// approach:
  // create a function called countAndSay to return the sequence of integers from the provided integer (n)
  // create a string variable and assign it to '1' because that's the starting point (result)
  // iterate from 2 to n ( start at 2 because the result variable already has '1')
    // create a temporary string variable to get each sequence per iteration (tempStr)
    // create a counter to state the number of occurrences for each integer (count)
    // iterate through the result string (iterate through the result string because that will constantly be updated after each iteration through it to equal the number of occurrences for each integer)
      // increment the counter so that each character has at least one occurrence regardless of whether or not the next char matches the current char
      // reassign count to be 0
      // if the next character doesn't match the current character
        // assign tempStr to equal counter + the current character
    // assign tempStr to result at the end of every inner iteration
  // return result

var countAndSay = (n) => {
  var result = '1';
  if ( (n < 1) || (n > 30)) {
    return null;
  }
  if (n < 2) {
    return result;
  }

  for (var i = 2; i <= n; i++) {
    var tempStr = '';
    var count = 0;
    for (var j = 0; j < result.length; j++) {
      count++;
      if (result[j] !== result[j + 1]) {
        tempStr += count + result[j];
        count = 0;
      }
    }
    result = tempStr;
  }
  return result;
};
