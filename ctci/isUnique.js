// implement an algorithm to determine if a string has all unique characters

var isUnique = (string) => {
  var unique = {};

  for (var i = 0; i < string.length; i++) {
    let char = string[i];
    if (unique[char]) {
      unique[char]++;
    } else {
      unique[char] = 1;
    }
  }

  for (var key in unique) {
    if (unique[key] !== 1) {
      return false;
    }
  }
  return true;
}

// console.log(isUnique('aaabbbcc')); // false
// console.log(isUnique('Hi')); // true
