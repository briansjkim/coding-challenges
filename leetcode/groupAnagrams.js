// Given an array of strings, group anagrams together

// Example:
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [ ['ate', 'eat', 'tea'], ['nat', 'tan'], ['bat'] ]

// i: array
// o: array of arrays
// c:
// e: all inputs will be lowercase. order of output doesn't matter


// 152ms
var groupAnagrams = function (strs) {
  var map = {};

  for (let str of strs) {
    let key = [...str].sort();

    if (!map[key]) {
      map[key] = [str];
    } else {
      map[key].push(str);
    }
  }
  return Object.values(map);
}

// easier readability
// 148ms
var groupAnagrams = function (strs) {
  var map = {};

  for (let str of strs) {
    let sortedStr = str.split('').sort();

    if (!map[sortedStr]) {
      map[sortedStr] = [str];
    } else {
      map[sortedStr].push(str);
    }
  }
  return Object.values(map);
}

// 140ms
var groupAnagrams = function (strs) {
  var map = {};

  for (let str of strs) {
    let sortedStr = str.split('').sort().join('');

    if (!map[sortedStr]) {
      map[sortedStr] = [str];
    } else {
      map[sortedStr].push(str);
    }
  }

  return Object.values(map);
}
