// return the index of the first occurence of needle in haystack, or -1 if needle is not part of haystack;

// edge case: what if needle is an empty string?

// cheating
var strStr = (haystack, needle) => {
  return haystack.indexOf(needle);
}

// linear time complexity
var strStr = (haystack, needle) => {
  if (needle.length === 0|| needle.length > haystack.length) {
    return 0;
  }

  for (var i = 0; i < haystack.length; i++) {
    let temp = haystack.substring(i, i + needle.length);
    if (needle === temp) {
      return i;
    }
  }
  return -1;
}

// console.log(strStr('hello', 'll')); // 2
// console.log(strStr('aaaaaa', 'bba')); // -1
