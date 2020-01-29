// there are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character
// given two strings, write a function to check if they are one edit (or zero edits) away

// max edits: 1

// i: 2 strings
// o: boolean
// c: n/a
// e:

// create a variable that stores the number of edits (1)
// get the difference in length between the two strings
  // if the difference is greater than the edits
    // that means it exceeds the max edit possible, so return false
// iterate through both strings at the same time
  // if they don't match
    // subtract 1 from edits
    // if edits is less than 0
      // return false
    // if the current char at s1 equals the next char at s2
      // increment the value of j
    // if the next char at s1 equals the current char at s2
      // increment the value of i
// if the for loop ends, that means the strings are only one edit away
  // so return true

var oneAway = (s1, s2) => {
  var edits = 1;
  var diff = Math.abs(s1.length - s2.length);

  // the condition will be either i < s1.length or j < s2.length because we don't know which string is the longest/shortest
  for (var i = 0, j = 0; i < s1.length || j < s2.length; i++, j++) {
    let c1 = s1[i];
    let c2 = s2[j];
    if (c1 !== c2) {
      edits--;
      if (edits < 0) {
        return false;
      }
      if (c1 === s2[j + 1]) {
        j++;
      } else if (s1[i + 1] === c2) {
        i++;
      }
    }
  }
  return true;
}

// console.log(oneAway('pale', 'ple')); // true
// console.log(oneAway('ple', 'pale')); // true
// console.log(oneAway('bale', 'pale')); // true
// console.log(oneAway('bake', 'pale')); // false
// console.log(oneAway('popped', 'bop')); // false
// console.log(oneAway('pales', 'pale')); // true
// console.log(oneAway('bales', 'pales')); // true

