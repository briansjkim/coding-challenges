// write a function to find the longest common prefix string amongst an array of strings
// if there is no common prefix, return an empty string
// all given inputs are in lowercase letters

// approach:
  // if the list is empty
    // return an empty string
  // create a string variable and initialize it to an empty string
  // iterate through the FIRST string of the array
    // we want to do this because if the string is longer than/shorter than any of the other strings
      // and the iteration through this string ends before the other strings
        // this means that that will be the longest common prefix
    // iterate through the rest of the list
      // if the characters from the first string and the rest of the strings don't match
        // return the prefix variable
        // exit the loop
    // add the character to the prefix
      // we want to add the characters to the prefix outside of the inner for loop
        // because if they match, each character will be added to the prefix until the loop breaks
  // return the prefix

var longestCommonPrefix = (array) => {
  var prefix = '';
  if (array.length === 0)  return '';

  for (var i = 0; i < array[0].length; i++) {
    let char = array[0][i];
    for (var j = 0; j < array.length; j++) {
      if (array[j][i] !== char) {
        return prefix;
      }
    }
    prefix += char;
  }
  return prefix;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
