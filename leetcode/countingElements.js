// given an integer array arr, count element x such that x + 1 is also in arr
// if there are duplicates in arr, count them separately

// Example 1:
// I: arr = [1, 2, 3]
// O: 2
// Explanation: 1 and 2 are counted because 2 and 3 are in arr
// x = 1; 1 + 1 = 2 which is in arr
// x = 2; 2 + 1 = 3 which is in arr
// x = 3; 3 + 1 = 4. not in arr

// Example 2:
// I: arr = [1, 1, 3, 3, 5, 5, 7, 7]
// O: 0
// Explanation: No numbers are counted because there's no 2, 4, 6, 8 in arr

// Example 3:
// I: arr = [1, 3, 2, 3, 5, 0];
// O: 3
// Explanation: 0, 1, 2 are counted because 1, 2, 3 are in arr

// Example 4:
// I: arr = [1, 1, 2, 2]
// O: 2
// Explanation: two 1's are counted because 2 is in arr

// I: array of integers
// O: integer
// C: 1 <= arr.length <= 1000; 0 <= arr[i] <= 1000

var groupAnagrams = function (strs) {
  var map = {};

  for (let str of strs) {
    let chars = str.split('').sort().join('');

    if (!map[chars]) {
      map[chars] = [str];;
    } else {
      map[chars].push(str);
    }
  }

  return Object.values(map);
}
