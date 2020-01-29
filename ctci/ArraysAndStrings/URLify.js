// write a method to replace all spaces in a string with '%20'
// you may assume that the string has sufficient space at the end to hold the additional characters

// linear time complexity
var urlify = (string) => {
  if (string.length === 0) {
    return '%20';
  }
  var url = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      url += '%20';
    } else {
      url += string[i];
    }
  }
  return url;
}

// console.log(urlify('Mr John Smith'));
// console.log(urlify('Hack Reactor'));
