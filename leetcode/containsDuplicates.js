/**
 * Given an array of itengers, find if the array contains any duplicates
 *
 * Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct
 *
 * Ex 1:
 * i: [1, 2, 3, 1]
 * o: true
 *
 * Ex 2:
 * i: [1, 2, 3, 4]
 * o: false
 *
 * Ex 3:
 * i: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
 * o: true
 *
 * i: array of integers (unsorted)
 * o: boolean
 * c:
 * e:
 */

var containsDuplicates = function (ints) {
  let uniques = {};

  for (let i = 0; i < ints.length; i++) {
    if (!uniques[ints[i]]) {
      uniques[ints[i]] = 1;
    } else {
      return true;
    }
  }

  return false;
}
