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

var countAndSay = (n) => {
  var result = '1';
};

// console.log(countAndSay(1)); // '1'
