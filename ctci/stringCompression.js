// implement a method to perform basic string compression using the counts of repeated characters
// Example:
  // 'aabcccccaa' would become 'a2b1c5a3'
// if the "compressed" string would not become smaller than the original string, your method should return the original string
// you can assume the string is only uppercase and lowercase letters

// i: string of characters
// o: string of characters and numbers
// c: n/a
// e: string contains uppercase and lowercase letter

// approach:
  // create a function that will implement a method to perform basic string compressions using the counts of repeated characters
  // create a string variable to hold the input string with all lowercase characters
  // create a string variable to hold the compressed string (compressedStr)
  // create a counter to hold the number of instances for each character (counter)
    // start the counter at 1
  // iterate through the string
    // increment the counter by 1
    // if the next character is the same as the current character
      // increment the counter
    // if it's not the same
      // add the current character and the counter to the compressed string
      // restart the counter to equal 1
  // if the compressed string's length is greater than or equal to the original string
    // return the original string
  // else
    // return the compressed string

// not case-sensitive
var stringCompression = (s) => {
  var newStr = s.toLowerCase();
  var compressedStr = '';
  var counter = 1;

  for (var i = 0; i < newStr.length; i++) {
    if (newStr[i + 1] === newStr[i]) {
      counter++;
    } else {
      compressedStr += newStr[i] + counter;
      counter = 1;
    }
  }
  if (compressedStr.length >= s.length) {
    return s;
  }
  return compressedStr;
}

// case-sensitive
var stringCompression = (s) => {
  var compressedStr = '';
  var counter = 1;

  for (var i = 0; i < s.length; i++) {
    if (s[i + 1] === s[i]) {
      counter++;
    } else {
      compressedStr += s[i] + counter;
      counter = 1;
    }
  }
  if (compressedStr.length >= s.length) {
    return s;
  }
  return compressedStr;
}

// console.log(stringCompression('aabcccccaaa')); //a2b1c5a3
// console.log(stringCompression('AabBcD')); //AabBcD
// console.log(stringCompression('AaaBbBCcCDdD')); //a3b3c3d3
// console.log(stringCompression('aaABbCDdE')); // aaABbCDdE
