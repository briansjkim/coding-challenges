// given a string s
// find the longest palindromic substring in s
// you may assume that the max length of s is 1000
// a palindrome is a word, phrase, or sequence that reads the same backward as forward

// i: string
// o: string (longest palindromic substring in s)
// c: n/a
// e: if the length is 0, return an empty string

// MEDIUM
// quadratic time complexity

// to make this constant, need to store previous palindrome?
var isPalindrome = (s1) => {
  var reverse = '';
  for (var i = s1.length - 1; i >= 0; i--) {
    reverse += s1[i];
  }
  return s1 === reverse;
}

var longestPalindrome = (s) => {
  var longest = '';
  var i = 0;
  var j = 0;

  while (i < s.length && j < s.length) {
    let substr = s.slice(i, j + 1);
    if (isPalindrome(substr) && longest.length < substr.length) {
      longest = substr;
    }
    j++;
    if (j === s.length) {
      i++;
      j = i;
    }
  }

  return longest;
}


// console.log(longestPalindrome('babad')); // 'bab' or 'aba'
// console.log(longestPalindrome('cbbd')); //bb
// console.log(longestPalindrome('ac')); //a
// console.log(longestPalindrome('bb')); //bb
// console.log(longestPalindrome('a')); //a
// console.log(longestPalindrome('ccd')); //cc
// console.log(longestPalindrome('caba')); //aba
// console.log(longestPalindrome("jrjnbctoqgzimtoklkxcknwmhiztomaofwwzjnhrijwkgmwwuazcowskjhitejnvtblqyepxispasrgvgzqlvrmvhxusiqqzzibcyhpnruhrgbzsmlsuacwptmzxuewnjzmwxbdzqyvsjzxiecsnkdibudtvthzlizralpaowsbakzconeuwwpsqynaxqmgngzpovauxsqgypinywwtmekzhhlzaeatbzryreuttgwfqmmpeywtvpssznkwhzuqewuqtfuflttjcxrhwexvtxjihunpywerkktbvlsyomkxuwrqqmbmzjbfytdddnkasmdyukawrzrnhdmaefzltddipcrhuchvdcoegamlfifzistnplqabtazunlelslicrkuuhosoyduhootlwsbtxautewkvnvlbtixkmxhngidxecehslqjpcdrtlqswmyghmwlttjecvbueswsixoxmymcepbmuwtzanmvujmalyghzkvtoxynyusbpzpolaplsgrunpfgdbbtvtkahqmmlbxzcfznvhxsiytlsxmmtqiudyjlnbkzvtbqdsknsrknsykqzucevgmmcoanilsyyklpbxqosoquolvytefhvozwtwcrmbnyijbammlzrgalrymyfpysbqpjwzirsfknnyseiujadovngogvptphuyzkrwgjqwdhtvgxnmxuheofplizpxijfytfabx"))
