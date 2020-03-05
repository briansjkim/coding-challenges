// write a function to find the longest common prefix string amongst an array of strings
// if there is no common prefix, return an empty string
// all given inputs are in lowercase letters

var longestCommonPrefix = (array) => {
  if (array.length === 0) return '';
  var prefix = '';

  for (var i = 0; i < array[0].length; i++) {
    let char = array[0][i];
    for (var j = 0; j < array.length; j++) {
      if (array[j][i] !== char) return prefix;
    }
    prefix += char;
  }
  return prefix;
}


var longestCommonPrefix = function (strs) {
  if (strs.length === 0) { return ''; }
  var prefix = '';

  for (var i = 0; i < strs[0].length; i++) {
    for (var j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) { return prefix; }
    }
    prefix += strs[0][i];
  }
  return prefix;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); //fl
console.log(longestCommonPrefix(['dog', 'deal', 'car'])); // ''
console.log(longestCommonPrefix(['broke', 'broker', 'broken'])); // broke
console.log(longestCommonPrefix(['internet', 'interneter', 'interneting'])); // internet
