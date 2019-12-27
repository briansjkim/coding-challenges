// assume you have a method 'isSubstring' which checks if one word is a substring of another
// given 2 strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring
// Example
  // waterbottle is a rotation of erbottlewat

var isSubstring = (s1, s2) => {
  return s1.includes(s2);
}

var stringRotation = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }

  // by concatenating, s2 will either appear or not within two s1
  // hellohello => lohel (s2) is located within the concatenated string
  var s1Double = s1.concat(s1);
  return isSubstring(s1Double, s2);
}

// console.log(stringRotation('hello', 'lohel')); // false
// console.log(stringRotation('waterbottle', 'erbottlewat')); // true
// console.log(stringRotation('mygod', 'odmy')); // false => even though 'odmy' is in 'mygod', it's not a rotation because the lengths aren't the same
// console.log(stringRotation('hello', 'lohul')); //false
