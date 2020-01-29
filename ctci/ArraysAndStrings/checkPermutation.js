// given two strings, write a method to decide one is a permutation of the other

// you could also sort the two strings, but ends up with longer time (and space?)

// linear time complexity
var checkPermutation = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }

  var check1 = {};
  var check2 = {};

  for (var i = 0; i < string1.length; i++) {
    let char = string1[i];
    if (check1[char]) {
      check1[char]++;
    } else {
      check1[char] = 1;
    }
  }

  for (var j = 0; j < string2.length; j++) {
    let char = string2[j];
    if (check2[char]) {
      check2[char]++;
    } else {
      check2[char] = 1;
    }
  }

  for (var key in check1) {
    if (!(key in check2)) {
      return false;
    }
    if (check1[key] !== check2[key]) {
      return false;
    }
  }

  return true;
}

console.log(checkPermutation('hello there', 'hlleo three')); // true
console.log(checkPermutation('there he is', 'here she is')); // false
