// given an integer, convert it to a roman numeral
// input is guaranteed to be within the range from 1 to 3999

// i: number
// o: string (roman)
// c: n/a
// e: 4, 9, 40, 90, 400, 900 are written differently
// 4: IV, 9: IX, XL: 40, XC: 90, CD: 400, CM: 900


// reverse the order of roman numerals because the while loop check won't work like it should
var intToRoman = (num) => {
  var roman = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }

  var result = '';
  for (var key in roman) {
    let romanNum = roman[key];
    while (num >= romanNum) {
      num -= romanNum;
      result += key;
    }
  }
  return result;
}

// console.log(intToRoman(3)); //III
// console.log(intToRoman(4)); //IV
// console.log(intToRoman(9)); // IX
// console.log(intToRoman(58)); // LVIII
// console.log(intToRoman(1994)); // MCMXCIV
