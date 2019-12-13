// return the index of the first occurence of needle in haystack, or -1 if needle is not part of haystack;

// edge case: what if needle is an empty string?

// cheating
var strStr = (haystack, needle) => {
  return haystack.indexOf(needle);
}

// console.log(strStr('hello', 'll')); // 2