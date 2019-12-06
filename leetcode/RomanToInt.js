// given a roman numeral, convert it to an integer
// input is guaranteed to be within the range from 1 to 3999

var romanToInt = (string) => {
  var romans = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  var romanNum = 0;
  for (var i = 0; i < string.length; i++) {
    if (romans[string[i]] < romans[string[i + 1]]) {
      romanNum -= romans[string[i]];
    } else {
      romanNum += romans[string[i]];
    }
  }
  return romanNum;
}

// console.log(romanToInt('I')); // 1
// console.log(romanToInt('III')); // 2
// console.log(romanToInt('IV')); // 4
// console.log(romanToInt('IX')); // 9
// console.log(romanToInt('LVIII')); // 58
// console.log(romanToInt('MCMXCIV')); // 1994