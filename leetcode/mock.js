// write a function that returns true if the given string is an annagram
// length of the string is greater than or equal to 3

// aba abba racecar

// i: one string
// o: boolean
// c: n/a for now
// e: no empty strings, all lowercase, one word

// aba => aba = true
// abba => abba = true
// awe => ewa = false

// create a function (isAnnagram)
// create a string variable (reversed)
// iterate through the input string from the end to the beginning
// add each character to reversed
// iterate through the input string from the beginning to end
// iterate through reversed from beginning to end
// if a single character doesn't match, return false
// return true

var isAnnagram = string => {
  var reversed = "";
  for (var i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  // return string === reversed;
  for (var j = 0; j < string.length; j++) {
    if (string[j] !== reversed[j]) {
      return false;
    }
  }
  return true;
};

// console.log(isAnnagram("aba"));
// console.log(isAnnagram("abba"));
// console.log(isAnnagram("racecar"));
// console.log(isAnnagram("awe"));

// detect duplicates in an array
// print out the duplicates

// i: array
// o: all of the duplicates
// c: n/a
// e: no empty arrays, if no duplicates return empty array

// [1, 2, 3, 4, 2] => [2]
// [1, 2, 3, 4, 5] => []
// [1, 1, 2, 2] => [1, 2]

// create a function to detect duplicates in given array
// create an empty object variable (storage)
// iterate through the input array
// if the number is already in storage
// increment its value by 1
// if it's not
// set its value to 1
// create an empty array variable (result)
// iterate through storage
// if any of the keys has a value greater than 1
// add it to the result variable
// return result

// // [1, 2, 3, 4, 2] => [2]
var detectDuplicates = array => {
  var storage = []; // []
  var result = []; // []

  for (var i = 0; i < array.length; i++) {
    if (storage[array[i]]) {
      //2 storage[2]
      storage[array[i]]++;
    } else {
      storage[array[i]] = 1; // [1] => [1, 1, 2, 1, 1] => [1, 2, 3] => [1, 2, 3, 4]
    }
  }

  for (var j = 0; j < storage.length; j++) {
    if (storage[j] > 1) {
      result.push(storage[j]);
    }
  }

  return result; // [2]
};

console.log(detectDuplicates([1, 2, 99, 3, 4, 2]));

// numbers given are between 0 and 99
// don't use an object
// keep it linear time complexity

// [1, 2, 3, 4, 2] => [2]

// create function
// create an empty array variable (result)
// create another empty array variable (storage)
// iterate through input array
// check if each number is already located in the storage array
// if not,
// add num to storage
// if it is
// add it to result
// return result

// var detectDuplicates = array => {
//   var storage = [];
//   var result = [];
//   for (var i = 0; i < array.length; i++) {
//     if (storage.indexOf(array[i]) < 0) {
//       storage.push(array[i]);
//     } else {
//       result.push(array[i]);
//     }
//   }
//   return result;
// };
